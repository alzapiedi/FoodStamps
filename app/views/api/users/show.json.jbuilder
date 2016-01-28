json.id @user.id
json.username @user.username
json.follows @current_user.follows?(@user)
json.post_count @user.stamps.count
json.followers_count @user.followers.count
json.following_count @user.followees.count
json.me @me
json.stamps(@stamps) do |stamp|
  json.username stamp.user.username
  json.extract!(stamp, :id, :body, :user_id, :created_at)
  json.image_url stamp.image.url
end
