class CreateComment < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.timestamps

      t.integer :stamp_id, null: false
      t.integer :user_id, null: false
      t.text :body, null: false
    end
    add_index :comments, :stamp_id
    add_index :comments, :user_id
  end
end
