json.partial! "reservation", reservation: reservation
json.reservation do
    json.extract! restaurant.restaurant, :name, :neighborhood, :cuisine
end
