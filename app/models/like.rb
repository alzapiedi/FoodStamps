class Like < ActiveRecord::Base
  belongs_to :stamp
  belongs_to :user
end
