class EditUsers < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :first_name, :string, null: false
    add_index :users, :first_name, unique: true
    add_column :users, :last_name, :string, null: false
    add_index :users, :last_name, unique: true
  end
end
