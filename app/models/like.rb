class Like < ActiveRecord::Base
  belongs_to :stamp
  belongs_to :user
  validates :user_id, uniqueness: { scope: :stamp_id }
end
