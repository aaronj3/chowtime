class Api::ReviewsController < ApplicationController
    def index
        if author_id
            reviews = Review.where(author_id: author_id)
            reviews.includes(:user, :restaurant)
        elseif restaurant_id
            reviews = Review.where(restaurant_id: restaurant_id)
            reviews.includes(:user, :restaurant)
        else
            render {}
        end

        @reviews = reviews
        render :index
    end

    def show
        @review = Review.find(params[:id])
        render @show
    end

    def update
        @review = Review.find([params[:id]])
        if @review.update(review_params)
            render :show
        else
            render json: @review.errors.full_messages, status: 422
        end
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
        @review = Review.find(params[:id])
        @review.destroy
        render :show
    end

    private
    def review_params
        params.require(:review).permit(:author_id, :restaurant_id, :overall, :food, :service, :ambience, :body)
    end

    def author_id
        params[:authorId]
    end

    def restaurant_id
        params[:restaurantId]
    end
end
