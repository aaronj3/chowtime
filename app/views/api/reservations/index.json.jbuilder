@reservations.each do |reservation|
    json.set! reservation.id do
        json.partial! "reservation", reservation: reservation
        json.restaurant do
            json.extract! booking.restaurant, :name, :neighborhood, :cuisine
        end
    end
end
