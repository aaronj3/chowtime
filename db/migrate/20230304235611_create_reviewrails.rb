class CreateReviewrails < ActiveRecord::Migration[7.0]
  def change
    create_table :reviewrails do |t|
      t.string :destroy
      t.string :model
      t.string :Review

      t.timestamps
    end
  end
end
