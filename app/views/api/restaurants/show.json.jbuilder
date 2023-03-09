# json.extract! @restaurant, :id, :name, :price_range, :cuisine, :neighborhood, :created_at, :updated_at, :menu, :address, :description

# json.reviews @restaurant.reviews


json.restaurant do
    json.extract! @restaurant, :id, :name, :price_range, :cuisine, :neighborhood, :created_at, :updated_at, :menu, :address, :description
    json.photos @restaurant.photos do |photo|
        json.filename photo.filename
        json.url url_for(photo)
    end
end

json.reviews do
    @restaurant.reviews.each do |review|
        json.set! review.id do
            json.extract! review, :id, :author_id, :restaurant_id, :overall, :food, :service, :ambience, :body, :created_at, :updated_at
        end
    end
end
