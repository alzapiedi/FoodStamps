class Mention < ActiveRecord::Base
  belongs_to :comment
  belongs_to :user
end
