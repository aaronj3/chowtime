class CreateReservations < ActiveRecord::Migration[7.0]
  def change
    create_table :reservations do |t|
      t.references :user, foreign_key: true, null: false
      t.references :restaurant, foreign_key: true, null: false
      t.string :date, null: false
      t.string :time, null: false
      t.integer :party_size, null: false
      t.timestamps
    end

    add_index :reservations, [:date, :time], unique: true
  end
end
