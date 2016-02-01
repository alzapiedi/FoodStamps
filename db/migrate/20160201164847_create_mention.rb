class CreateMention < ActiveRecord::Migration
  def change
    create_table :mentions do |t|
      t.integer :comment_id, null: false
      t.integer :user_id, null: false
    end
  end
end
