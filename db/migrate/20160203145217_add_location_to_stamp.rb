class AddLocationToStamp < ActiveRecord::Migration
  def change
    add_column :stamps, :location_id, :string
  end
end
