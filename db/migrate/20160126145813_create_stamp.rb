class CreateStamp < ActiveRecord::Migration
  def change
    create_table :stamps do |t|
      t.text :body, null: false
      t.string :image_url, null: false
      t.integer :user_id, null: false
    end
    add_index :stamps, :user_id
  end
end
