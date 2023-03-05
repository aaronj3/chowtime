class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.references :author, foreign_key: {to_table: :users}, null: false
      t.references :restaurant, foreign_key: true, null: false
      t.integer :overall, null: false
      t.integer :food, null: false
      t.integer :service, null: false
      t.integer :ambience, null: false
      t.string :body, null: false
      t.timestamps
    end
  end
end
