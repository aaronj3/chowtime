# == Schema Information
#
# Table name: reviews
#
#  id            :bigint           not null, primary key
#  author_id     :bigint           not null
#  restaurant_id :bigint           not null
#  overall       :integer          not null
#  food          :integer          not null
#  service       :integer          not null
#  ambience      :integer          not null
#  body          :string           not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#
class Review < ApplicationRecord
    belongs_to :author,
        foreign_key: 'author_id',
        class_name: 'User'

    belongs_to :restaurant,
        foreign_key: 'restaurant_id',
        class_name: 'Restaurant'

end
