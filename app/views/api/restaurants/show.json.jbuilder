# json.extract! @restaurant, :id, :name, :price_range, :cuisine, :neighborhood, :created_at, :updated_at, :menu, :address, :description

# json.reviews @restaurant.reviews


json.restaurant do
    json.extract! @restaurant, :id, :name, :price_range, :cuisine, :neighborhood, :created_at, :updated_at, :menu, :address, :description
end

json.reviews do
     @restaurant.reviews.each do |review|
        json.set! review.id do
            json.extract! review, :author_id, :restaurant_id, :overall, :food, :service, :ambience, :body, :created_at, :updated_at
        end
    end
end
