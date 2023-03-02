# == Schema Information
#
# Table name: restaurants
#
#  id           :bigint           not null, primary key
#  name         :string           not null
#  price_range  :string           not null
#  cuisine      :string           not null
#  neighborhood :string           not null
#  menu         :string           not null
#  address      :string           not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
class Restaurant < ApplicationRecord

    validates :name, :price_range, :cuisine, :neighborhood, :address, :menu, presence: true
    validates :name, :address, uniqueness: true



end
