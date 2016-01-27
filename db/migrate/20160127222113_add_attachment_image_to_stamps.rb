class AddAttachmentImageToStamps < ActiveRecord::Migration
  def self.up
    change_table :stamps do |t|
      t.attachment :image
    end
  end

  def self.down
    remove_attachment :stamps, :image
  end
end
