class CreateLike < ActiveRecord::Migration
  def change
    create_table :likes do |t|
      t.integer :user_id, null: false
      t.integer :stamp_id, null: false

      t.timestamps
    end
    add_index :likes, [:user_id, :stamp_id], unique: true
  end
end
