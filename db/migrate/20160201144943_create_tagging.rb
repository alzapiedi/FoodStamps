class CreateTagging < ActiveRecord::Migration
  def change
    create_table :taggings do |t|
      t.integer :comment_id
      t.integer :tag_id

      t.timestamps
    end
  end
end
