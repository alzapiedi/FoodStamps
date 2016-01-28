json.array!(@stamps) do |stamp|
  json.username stamp.user.username
  json.thumb_avatar asset_path(stamp.user.avatar.url(:thumb))
  json.extract!(stamp, :id, :body, :user_id, :created_at)
  json.image_url stamp.image.url
end
