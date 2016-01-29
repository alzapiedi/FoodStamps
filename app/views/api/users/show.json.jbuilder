json.id @user.id
json.avatar asset_path(@user.avatar.url(:medium))
json.username @user.username
json.follows @current_user.follows?(@user)
json.post_count @user.stamps.count
json.followers_count @user.followers.count
json.following_count @user.followees.count
json.stamps(@stamps) do |stamp|
  json.comments(stamp.comments.includes(:user)) do |comment|
    json.id comment.id
    json.body comment.body
    json.username comment.user.username
    json.user_id comment.user.id
  end
  json.liked @current_user.likes?(stamp)
  json.likes stamp.likes.count
  json.thumb_avatar asset_path(stamp.user.avatar.url(:thumb))
  json.username stamp.user.username
  json.extract!(stamp, :id, :body, :user_id, :created_at)
  json.image_url stamp.image.url
end
