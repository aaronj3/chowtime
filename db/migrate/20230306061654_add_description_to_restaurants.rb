class AddDescriptionToRestaurants < ActiveRecord::Migration[7.0]
  def change
    add_column :restaurants, :description, :string, default: "", null: false
  end
end
