json.array!(@stamps) do |stamp|
  json.username stamp.user.username
  json.extract!(stamp, :id, :body, :user_id, :created_at)
  json.image_url stamp.image.url
end
