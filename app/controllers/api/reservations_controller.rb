class Api::ReservationsController < ApplicationController
    def index
        ##where does "user_id" in the below if statement come from?
        if user_id
            @reservation = Reservation.where("user_id= ?", user_id)
        else
            @reservation = {}
        end

        render :index
    end

    def show
        @reservation = Reservation.find(params[:id])
        render :show
    end

    def create
        @reservation = Reservation.new(reservation_params);
        if @reservation.save
            render "api/bookings/show"
        else
            render json: @reservation.errors.full_messages, status: 422
        end
    end

    def destroy
        @reservation = Reservation.find(params[:id])
        @reservation.destroy
        render :show
    end


    private
    def reservation_params
        params.require(:reservation).permit(:id, :user_id, :restaurant_id, :date, :time, :party_size)
    end


    ##what are these for?
    def user_id
        params[:userId]
    end

    def restaurant_id
        params[:restaurantId]
    end
end
