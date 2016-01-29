json.array!(@stamps) do |stamp|
  json.comments(stamp.comments.includes(:user)) do |comment|
    json.id comment.id
    json.body comment.body
    json.username comment.user.username
    json.user_id comment.user.id
  end
  json.username stamp.user.username
  json.thumb_avatar asset_path(stamp.user.avatar.url(:thumb))
  json.extract!(stamp, :id, :body, :user_id, :created_at)
  json.image_url stamp.image.url
end
