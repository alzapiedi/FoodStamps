class RemoveImageFromStamp < ActiveRecord::Migration
  def change
    remove_column :stamps, :image_url
  end
end
