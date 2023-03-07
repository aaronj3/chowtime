json.user do
    json.extract! @user, :id, :email, :first_name, :last_name, :created_at, :updated_at
end

json.reviews do
    @user.reviews.each do |review|
        json.set! review.id do
            json.extract! review, :author_id, :restaurant_id, :overall, :food, :service, :ambience, :body, :created_at, :updated_at
        end
    end
end
