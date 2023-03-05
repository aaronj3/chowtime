# == Schema Information
#
# Table name: reservations
#
#  id            :bigint           not null, primary key
#  user_id       :bigint           not null
#  restaurant_id :bigint           not null
#  date          :string           not null
#  time          :string           not null
#  party_size    :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#
class Reservation < ApplicationRecord
    belongs_to :user


end
