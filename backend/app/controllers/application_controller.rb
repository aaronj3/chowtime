class ApplicationController < ActionController::API

    # CSRF protection
    include ActionController::RequestForgeryProtection
    protect_from_forgery with: :exception

    #error handling macros
    rescue_from StandardError, with: :unhandled_error
    rescue_from ActionController::InvalidAuthenticityToken,
    with: :invalid_authenticity_token



    before_action :snake_case_params, :attach_authenticity_token


    def current_user
        return nil if session[:session_token].nil?
        @current_user ||= User.find_by(session_token: session[:session_token])
    end

    def login!(user)
    # reset `user`'s `session_token` and store in `session` cookie
        session[:session_token] = user.reset_session_token!
        @current_user = user
    end

    def logout!
    # reset the `current_user`'s session cookie, if one exists
    # clear out token from `session` cookie
    # so that subsequent calls to `current_user` return nil
        current_user.reset_session_token!
        session[:session_token] = nil
        @current_user = nil

    end

    def require_logged_in
        unless current_user
            render json: { message: 'Unauthorized' }, status: :unauthorized
        end
    end

    private
    def snake_case_params
        params.deep_transform_keys!(&:underscore)
    end

    def attach_authenticity_token
        headers['X-CSRF-Token'] = masked_authenticity_token(session)
    end

    def invalid_authenticity_token
        render json: { message: 'Invalid authenticity token' },
        status: :unprocessable_entity
    end

    def unhandled_error(error)
        if request.accepts.first.html?
        raise error
        else
            @message = "#{error.class} - #{error.message}"
            @stack = Rails::BacktraceCleaner.new.clean(error.backtrace)
            render 'api/errors/internal_server_error', status: :internal_server_error

            logger.error "\n#{@message}:\n\t#{@stack.join("\n\t")}\n"
        end
    end
end
