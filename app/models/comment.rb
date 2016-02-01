class Comment < ActiveRecord::Base
  belongs_to :stamp
  belongs_to :user
  has_many :mentions
  has_many :taggings
  has_many :tags, through: :taggings, source: :tag
  after_save :parse_string
  include PgSearch
  multisearchable :against => [:body]

  def parse_string
    tags = body.split(" ").select { |word| word.start_with?("#") }
    mentions = body.split(" ").select { |word| word.start_with?("@") }
    tags.each do |tag|
      db_tag = Tag.find_by_tag_name(tag[1..-1])
      if db_tag.nil?
        db_tag = Tag.create(tag_name: tag[1..-1])
      end
      Tagging.create(tag_id: db_tag.id, comment_id: self.id)
    end
    mentions.each do |mention|
      mentioned_user = User.find_by_username(mention[1..-1])
      if mentioned_user
        Mention.create(user_id: mentioned_user.id, comment_id: self.id)
      end
    end
  end

end
