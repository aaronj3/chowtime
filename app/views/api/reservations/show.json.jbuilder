json.partial! "reservation", reservation: reservation
json.reservation do
    json.extract! booking.restaurant, :name, :neighborhood, :cuisine
end
