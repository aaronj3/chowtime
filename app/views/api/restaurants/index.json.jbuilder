json.restaurants do
    @restaurants.each do |restaurant|
        json.set! restaurant.id do
            json.extract! restaurant, :id, :name, :price_range, :cuisine, :neighborhood, :created_at, :updated_at, :menu, :address, :description
            json.photos restaurant.photos do |photo|
                json.filename photo.filename
                json.url url_for(photo)
            end
        end
    end
end
