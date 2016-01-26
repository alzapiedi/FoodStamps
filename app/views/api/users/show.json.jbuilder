json.extract!(@user, :id, :username)
json.stamps do
  json.array!(@user.stamps) do |stamp|
    json.extract!(stamp, :id, :image_url, :body)
  end
end
