class Stamp < ActiveRecord::Base
  include PgSearch
  after_save :new_comment
  belongs_to :user
  has_many :comments
  has_many :likes
  has_many :tags, through: :comments, source: :tags
  has_many :mentions, through: :comments, source: :mentions
  pg_search_scope :stamp_search, :associated_against => {
    :comments => [:body],
    :tags => [:tag_name],
    :user => [:username]
  }
  has_attached_file :image, styles: { feed: "600x", modal: "500x500#", small: "280x280" }
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  def new_comment
    Comment.create(body: self.body, stamp_id: self.id, user_id: self.user_id)
  end
end
