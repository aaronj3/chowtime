class Api::ReviewsController < ApplicationController
    def index
        @reviews = Review.where(restaurant_id: params[:restaurant_id])
        render :index
    end

    def create
        @review = Review.new(review_params)

        if @review.save
            render :show
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    def destroy
        @review.destroy
        head :no_content
    end

    private
    def review_params
        params.require(:review).permit(:author_id, :restaurant_id, :overall, :food, :service, :ambience, :body)
    end
end
