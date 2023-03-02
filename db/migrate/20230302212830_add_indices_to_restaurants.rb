class AddIndicesToRestaurants < ActiveRecord::Migration[7.0]
  def change
    add_index :restaurants, :name, unique: true
  end
end
