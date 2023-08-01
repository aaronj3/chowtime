class ChangeDateAndTimeDataTypesInReservations < ActiveRecord::Migration[7.0]
  def change
    change_column :reservations, :date, 'date USING date::date', null: false
    change_column :reservations, :time, 'time USING time::time', null: false
  end
end
