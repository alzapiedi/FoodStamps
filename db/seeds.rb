# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


User.destroy_all
u1 = User.create(username: "nick", password: "password", avatar: File.open("app/assets/images/nick-alzapiedi.jpg"))
u2 = User.create(username: "johnny_rocket", password: "password", avatar: File.open("app/assets/images/face1.jpg"))
u3 = User.create(username: "crabcakes17", password: "password", avatar: File.open("app/assets/images/barack-obama.png"))
u4 = User.create(username: "poultry_lover77", password: "password", avatar: File.open("app/assets/images/unnamed.png"))
u5 = User.create(username: "slimjim1396", password: "password", avatar: File.open("app/assets/images/crazy.jpg"))

Stamp.destroy_all
s3 = Stamp.create(body: "Shrimp fried rice", user_id: u1.id, image: File.open("app/assets/images/DSC_6079.JPG"))
s7 = Stamp.create(body: "Chicken and waffles", user_id: u3.id, image: File.open("app/assets/images/chicken-and-waffles-3-1024x682.jpg"))
s15 = Stamp.create(body: "The halal guys are the best", user_id: u5.id, image: File.open("app/assets/images/20121002-halal-taste-test-famous-halal-52nd-platter.jpg"))
s4 = Stamp.create(body: "Spaghetti and meatballs", user_id: u2.id, image: File.open("app/assets/images/Spaghetti-and-Meatballs_16025.jpg"))
s11 = Stamp.create(body: "Pasta carbonara", user_id: u4.id, image: File.open("app/assets/images/Carbonara.jpg"))
s1 = Stamp.create(body: "Chicken parmesan", user_id: u1.id, image: File.open("app/assets/images/Chicken-Parmesan.jpg"))
s13 = Stamp.create(body: "Apple pie", user_id: u5.id, image: File.open("app/assets/images/52912.jpg"))
s10 = Stamp.create(body: "Amazing cookies", user_id: u4.id, image: File.open("app/assets/images/2ea0aafc-2942-4134-947f-847c043411ae.jpg"))
s8 = Stamp.create(body: "Will you just look at this sandwich", user_id: u3.id, image: File.open("app/assets/images/large_7-24dining.jpg"))
s5 = Stamp.create(body: "Chicken marsala", user_id: u2.id, image: File.open("app/assets/images/Chicken-Marsala-2-sm.jpg"))
s9 = Stamp.create(body: "Best pizza ever!", user_id: u3.id, image: File.open("app/assets/images/pizza-wallpaper-199-248-hd-wallpapers.jpg"))
s14 = Stamp.create(body: "Baked ziti", user_id: u5.id, image: File.open("app/assets/images/baked-ziti-horiz-640.jpg"))
s2 = Stamp.create(body: "Caesar salad", user_id: u1.id, image: File.open("app/assets/images/ceasar-salad-recipe.jpg"))
s12 = Stamp.create(body: "Filet mignon", user_id: u4.id, image: File.open("app/assets/images/fm_1.jpg"))
s6 = Stamp.create(body: "Pork tenderloin", user_id: u2.id, image: File.open("app/assets/images/tenderloin2.jpg"))

Follow.destroy_all
Follow.create(followee_id: u2.id, follower_id: u1.id)
Follow.create(followee_id: u3.id, follower_id: u1.id)
Follow.create(followee_id: u4.id, follower_id: u1.id)
Follow.create(followee_id: u5.id, follower_id: u1.id)

Comment.destroy_all
Comment.create(stamp_id: s1.id, user_id: u3.id, body: "looks delicious")
Comment.create(stamp_id: s1.id, user_id: u4.id, body: "looks delicious")
Comment.create(stamp_id: s2.id, user_id: u4.id, body: "looks delicious")
Comment.create(stamp_id: s2.id, user_id: u5.id, body: "looks delicious")
Comment.create(stamp_id: s3.id, user_id: u2.id, body: "looks delicious")
Comment.create(stamp_id: s3.id, user_id: u3.id, body: "looks delicious")
Comment.create(stamp_id: s4.id, user_id: u1.id, body: "looks delicious")
Comment.create(stamp_id: s4.id, user_id: u4.id, body: "looks delicious")
Comment.create(stamp_id: s5.id, user_id: u1.id, body: "looks delicious")
Comment.create(stamp_id: s5.id, user_id: u3.id, body: "looks delicious")
Comment.create(stamp_id: s6.id, user_id: u4.id, body: "looks delicious")
Comment.create(stamp_id: s6.id, user_id: u5.id, body: "looks delicious")
Comment.create(stamp_id: s7.id, user_id: u2.id, body: "looks delicious")
Comment.create(stamp_id: s7.id, user_id: u1.id, body: "looks delicious")
Comment.create(stamp_id: s8.id, user_id: u5.id, body: "looks delicious")
Comment.create(stamp_id: s8.id, user_id: u4.id, body: "looks delicious")
Comment.create(stamp_id: s9.id, user_id: u5.id, body: "looks delicious")
Comment.create(stamp_id: s9.id, user_id: u1.id, body: "looks delicious")
Comment.create(stamp_id: s10.id, user_id: u2.id, body: "looks delicious")
Comment.create(stamp_id: s10.id, user_id: u3.id, body: "looks delicious")
