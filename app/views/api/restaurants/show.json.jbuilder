json.extract! @restaurant, :id, :name, :price_range, :cuisine, :neighborhood, :created_at, :updated_at, :menu, :address, :description

json.reviews @restaurant.reviews
