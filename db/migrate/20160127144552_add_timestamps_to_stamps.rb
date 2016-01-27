class AddTimestampsToStamps < ActiveRecord::Migration
  def change
    add_timestamps(:stamps)
  end
end
