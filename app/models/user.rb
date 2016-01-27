class User < ActiveRecord::Base
  attr_reader :password
  validates :username, :password_digest, :session_token, presence: true
  validates :password, length: { minimum: 6, allow_nil: true}
  validates :username, length: { minimum: 4, maximum: 15 }
  after_initialize :ensure_session_token
  has_many :in_follows, class_name: "Follow", foreign_key: "followee_id"
  has_many :out_follows, class_name: "Follow", foreign_key: "follower_id"
  has_many :followers, through: :in_follows, source: :follower
  has_many :followees, through: :out_follows, source: :followee
  has_many :stamps, dependent: :destroy

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def self.find_by_credentials(username, password)
    user = User.find_by_username(username)
    if user && user.is_password?(password)
      return user
    else
      return nil
    end
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    save
    session_token
  end

  def feed
   @feed = Stamp.includes(:user).where(user: self.followees).order(created_at: :desc)
  end

  def follows?(user)
    out_follows.exists?(followee_id: user.id)
  end

  private
  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end
end
