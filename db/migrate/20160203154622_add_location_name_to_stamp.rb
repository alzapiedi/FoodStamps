class AddLocationNameToStamp < ActiveRecord::Migration
  def change
    add_column :stamps, :location_name, :string
  end
end
