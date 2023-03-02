class EditRestaurants < ActiveRecord::Migration[7.0]
  def change
    add_column :restaurants, :menu, :string, null: false
    add_column :restaurants, :address, :string, unique: true, null: false
  end
end
