json.array!(@stamps) do |stamp|
  json.comments(stamp.comments.includes(:user)) do |comment|
    json.id comment.id
    json.body comment.body
    json.username comment.user.username
    json.user_id comment.user.id
    json.mentions(stamp.mentions) do |mention|
      json.username mention.user.username
      json.user_id mention.user_id
    end
  end
  json.liked @current_user.likes?(stamp)
  json.likes stamp.likes.count
  json.username stamp.user.username
  json.thumb_avatar asset_path(stamp.user.avatar.url(:thumb))
  json.extract!(stamp, :id, :body, :user_id, :created_at, :location_id, :location_name)
  json.image_url stamp.image.url
end
