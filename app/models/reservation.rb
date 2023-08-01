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
    # validate :unique_reservation_for_date_and_time



    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User

    belongs_to :restaurant,
        foreign_key: :restaurant_id,
        class_name: :Restaurant

    private

    # def unique_reservation_for_date_and_time
    #     existing_reservation = Reservation.find_by(reservation_date: reservation_date, reservation_time: reservation_time)

    #     if existing_reservation && (existing_reservation != self)
    #     errors.add(:base, "This date and time is already reserved by another user.")
    #     end
    # end
end
