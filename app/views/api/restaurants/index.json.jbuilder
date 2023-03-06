json.restaurants do
    @restaurants.each do |restaurant|
        json.set! restaurant.id do
            json.extract! restaurant, :id, :name, :price_range, :cuisine, :neighborhood, :created_at, :updated_at, :menu, :address, :description
        end
    end
end
