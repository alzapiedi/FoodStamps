# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
locations = [
  ["App Academy NYC", "ChIJ9SJkp49ZwokRDu04SSfFnLk"],
  ["Hoboken", "ChIJ0TMVjWBXwokRh783EWrKtkQ"],
  ["Las Vegas", "ChIJ0X31pIK3voARo3mz1ebVzDo"],
  ["Chicago", "ChIJ7cv00DwsDogRAMDACa2m4K8"],
  ["Miami", "ChIJEcHIDqKw2YgRZU-t3XHylv8"],
  ["San Francisco", "ChIJIQBpAG2ahYAR_6128GcTUEo"],
  ["San Diego", "ChIJSx6SrQ9T2YARed8V_f0hOg0"],
  ["Paris", "ChIJD7fiBh9u5kcRYJSMaMOCCwQ"],
  ["Amsterdam", "ChIJVXealLU_xkcRja_At0z9AGY"],
  ["Montreal", "ChIJDbdkHFQayUwR7-8fITgxTmU"]]


User.destroy_all
u1 = User.create(username: "nick", password: "password", avatar: File.open("app/assets/images/nick-alzapiedi.jpg"))
u2 = User.create(username: "johnny_rocket", password: "password", avatar: File.open("app/assets/images/face1.jpg"))
u3 = User.create(username: "crabcakes17", password: "password", avatar: File.open("app/assets/images/barack-obama.png"))
u4 = User.create(username: "poultry_lover77", password: "password", avatar: File.open("app/assets/images/unnamed.png"))
u5 = User.create(username: "slimjim1396", password: "password", avatar: File.open("app/assets/images/crazy.jpg"))
u6 = User.create(username: "senator_cruz", password: "password", avatar: File.open("app/assets/images/cruz.gif"))
u7 = User.create(username: "lebron_james", password: "password", avatar: File.open("app/assets/images/lebron.jpg"))
u8 = User.create(username: "mike_tyson", password: "password", avatar: File.open("app/assets/images/tyson.jpg"))
u9 = User.create(username: "meatballs4u", password: "password", avatar: File.open("app/assets/images/profpic.jpg"))
u10 = User.create(username: "hambone06", password: "password", avatar: File.open("app/assets/images/profpic2.jpeg"))
u11 = User.create(username: "guest", password: "password", avatar: File.open("app/assets/images/guest.jpeg") )

Stamp.destroy_all
Comment.destroy_all
s3 = Stamp.create(body: "Shrimp fried rice", user_id: u1.id, image: File.open("app/assets/images/DSC_6079.JPG"))
s7 = Stamp.create(body: "Chicken and waffles", user_id: u3.id, image: File.open("app/assets/images/chicken-and-waffles-3-1024x682.jpg"))
s15 = Stamp.create(body: "The halal guys are the best", user_id: u5.id, image: File.open("app/assets/images/20121002-halal-taste-test-famous-halal-52nd-platter.jpg"))
s4 = Stamp.create(body: "Spaghetti and meatballs", user_id: u2.id, image: File.open("app/assets/images/Spaghetti-and-Meatballs_16025.jpg"))
s23 = Stamp.create(body: "shout out to my homeboy", user_id: u7.id, image: File.open("app/assets/images/mcd4.jpg"))
s1 = Stamp.create(body: "Chicken parmesan", user_id: u1.id, image: File.open("app/assets/images/Chicken-Parmesan.jpg"))
s32 = Stamp.create(body: "entirely too much ham", user_id: u9.id, image: File.open("app/assets/images/ham.jpg"))
s20 = Stamp.create(body: "I'm lovin it!", user_id: u7.id, image: File.open("app/assets/images/mcd1.png"))
s30 = Stamp.create(body: "Decadent chocolatey goodness!", user_id: u9.id, image: File.open("app/assets/images/cake.jpg"))
s22 = Stamp.create(body: "#ronald macdonald", user_id: u7.id, image: File.open("app/assets/images/mcd3.jpg"))
s26 = Stamp.create(body: "#beef its wats 4 dinner", user_id: u8.id, image: File.open("app/assets/images/tyson3.jpg"))
s10 = Stamp.create(body: "Amazing cookies", user_id: u4.id, image: File.open("app/assets/images/2ea0aafc-2942-4134-947f-847c043411ae.jpg"))
s8 = Stamp.create(body: "Will you just look at this sandwich", user_id: u3.id, image: File.open("app/assets/images/large_7-24dining.jpg"))
s5 = Stamp.create(body: "Chicken marsala", user_id: u2.id, image: File.open("app/assets/images/Chicken-Marsala-2-sm.jpg"))
s16 = Stamp.create(body: "Did somebody say poutine?", user_id: u6.id, image: File.open("app/assets/images/poutine.jpeg"))
s34 = Stamp.create(body: "hearty and delicious", user_id: u10.id, image: File.open("app/assets/images/pork and beans.jpg"))
s18 = Stamp.create(body: "Tim Hortons #heaven", user_id: u6.id, image: File.open("app/assets/images/donuts2.jpg"))
s14 = Stamp.create(body: "Baked ziti", user_id: u5.id, image: File.open("app/assets/images/baked-ziti-horiz-640.jpg"))
s25 = Stamp.create(body: "breakfast is served", user_id: u8.id, image: File.open("app/assets/images/tyson2.jpg"))
s11 = Stamp.create(body: "Pasta carbonara", user_id: u4.id, image: File.open("app/assets/images/Carbonara.jpg"))
s2 = Stamp.create(body: "Caesar salad", user_id: u1.id, image: File.open("app/assets/images/ceasar-salad-recipe.jpg"))
s24 = Stamp.create(body: "look what i found 4 dinner", user_id: u8.id, image: File.open("app/assets/images/tyson1.jpg"))
s36 = Stamp.create(body: "I miss thanksgiving", user_id: u10.id, image: File.open("app/assets/images/turkey.jpg"))
s12 = Stamp.create(body: "Filet mignon", user_id: u4.id, image: File.open("app/assets/images/fm_1.jpg"))
s29 = Stamp.create(body: "brb getting fat", user_id: u9.id, image: File.open("app/assets/images/burgers.jpeg"))
s6 = Stamp.create(body: "Pork tenderloin", user_id: u2.id, image: File.open("app/assets/images/tenderloin2.jpg"))
s17 = Stamp.create(body: "Donuts", user_id: u6.id, image: File.open("app/assets/images/Donuts.jpg"))
s33 = Stamp.create(body: "simple and delicious #pbj", user_id: u10.id, image: File.open("app/assets/images/pbj.jpg"))
s27 = Stamp.create(body: "time for a treat #sweettooth", user_id: u8.id, image: File.open("app/assets/images/icecream.jpeg"))
s19 = Stamp.create(body: "O Canada!", user_id: u6.id, image: File.open("app/assets/images/butter-tarts.jpg"))
s31 = Stamp.create(body: "Holy Guacamole! Whos got chips", user_id: u9.id, image: File.open("app/assets/images/guac.jpg"))
s21 = Stamp.create(body: "McDonalds is healthy", user_id: u7.id, image: File.open("app/assets/images/mcd2.jpg"))
s9 = Stamp.create(body: "Best pizza ever!", user_id: u3.id, image: File.open("app/assets/images/pizza-wallpaper-199-248-hd-wallpapers.jpg"))
s35 = Stamp.create(body: "Nothing like a yankee pot roast!", user_id: u10.id, image: File.open("app/assets/images/potroast.jpg"))
s13 = Stamp.create(body: "Apple pie", user_id: u5.id, image: File.open("app/assets/images/52912.jpg"))
s28 = Stamp.create(body: "Beef Wellington", user_id: u1.id, image: File.open("app/assets/images/beef-wellington.jpg"))

comments = [
  "looks #delicious",
  "wow how good is that",
  "omg you better save me some",
  "want",
  "i need this in my mouth",
  "WOW",
  "you are gonna get fat",
  "so jealous",
  "looks so amazing",
  "lucky",
  "now thats some good eatin",
  "that sure looks tasty",
  "great meal you got there",
  "the things i would do for a bite of that",
  "i need to try this",
  "aren't you on a diet? LOL",
  "super tasty",
  "i am salivating",
  "great now im hungry",
  "i wish i had some of this",
  "never seen food look so good",
  "i want it so bad"
]





Follow.destroy_all
Follow.create(followee_id: u2.id, follower_id: u1.id)
Follow.create(followee_id: u3.id, follower_id: u1.id)
Follow.create(followee_id: u4.id, follower_id: u1.id)
Follow.create(followee_id: u5.id, follower_id: u1.id)
Follow.create(followee_id: u6.id, follower_id: u1.id)
Follow.create(followee_id: u7.id, follower_id: u1.id)
Follow.create(followee_id: u8.id, follower_id: u1.id)
Follow.create(followee_id: u9.id, follower_id: u1.id)
Follow.create(followee_id: u10.id, follower_id: u1.id)
Follow.create(followee_id: u1.id, follower_id: u2.id)
Follow.create(followee_id: u3.id, follower_id: u2.id)
Follow.create(followee_id: u4.id, follower_id: u2.id)
Follow.create(followee_id: u5.id, follower_id: u2.id)
Follow.create(followee_id: u6.id, follower_id: u2.id)
Follow.create(followee_id: u7.id, follower_id: u2.id)
Follow.create(followee_id: u8.id, follower_id: u2.id)
Follow.create(followee_id: u9.id, follower_id: u2.id)
Follow.create(followee_id: u10.id, follower_id: u2.id)
Follow.create(followee_id: u1.id, follower_id: u3.id)
Follow.create(followee_id: u2.id, follower_id: u3.id)
Follow.create(followee_id: u4.id, follower_id: u3.id)
Follow.create(followee_id: u5.id, follower_id: u3.id)
Follow.create(followee_id: u6.id, follower_id: u3.id)
Follow.create(followee_id: u7.id, follower_id: u3.id)
Follow.create(followee_id: u8.id, follower_id: u3.id)
Follow.create(followee_id: u9.id, follower_id: u3.id)
Follow.create(followee_id: u10.id, follower_id: u3.id)

Follow.create(followee_id: u1.id, follower_id: u4.id)
Follow.create(followee_id: u2.id, follower_id: u4.id)
Follow.create(followee_id: u3.id, follower_id: u4.id)
Follow.create(followee_id: u5.id, follower_id: u4.id)
Follow.create(followee_id: u6.id, follower_id: u4.id)
Follow.create(followee_id: u7.id, follower_id: u4.id)
Follow.create(followee_id: u8.id, follower_id: u4.id)
Follow.create(followee_id: u9.id, follower_id: u4.id)
Follow.create(followee_id: u10.id, follower_id: u4.id)

Follow.create(followee_id: u1.id, follower_id: u5.id)
Follow.create(followee_id: u2.id, follower_id: u5.id)
Follow.create(followee_id: u3.id, follower_id: u5.id)
Follow.create(followee_id: u4.id, follower_id: u5.id)
Follow.create(followee_id: u6.id, follower_id: u5.id)
Follow.create(followee_id: u7.id, follower_id: u5.id)
Follow.create(followee_id: u8.id, follower_id: u5.id)
Follow.create(followee_id: u9.id, follower_id: u5.id)
Follow.create(followee_id: u10.id, follower_id: u5.id)

Follow.create(followee_id: u1.id, follower_id: u6.id)
Follow.create(followee_id: u2.id, follower_id: u6.id)
Follow.create(followee_id: u3.id, follower_id: u6.id)
Follow.create(followee_id: u4.id, follower_id: u6.id)
Follow.create(followee_id: u5.id, follower_id: u6.id)
Follow.create(followee_id: u7.id, follower_id: u6.id)
Follow.create(followee_id: u8.id, follower_id: u6.id)
Follow.create(followee_id: u9.id, follower_id: u6.id)
Follow.create(followee_id: u10.id, follower_id: u6.id)

Follow.create(followee_id: u1.id, follower_id: u7.id)
Follow.create(followee_id: u2.id, follower_id: u7.id)
Follow.create(followee_id: u3.id, follower_id: u7.id)
Follow.create(followee_id: u4.id, follower_id: u7.id)
Follow.create(followee_id: u5.id, follower_id: u7.id)
Follow.create(followee_id: u6.id, follower_id: u7.id)
Follow.create(followee_id: u8.id, follower_id: u7.id)
Follow.create(followee_id: u9.id, follower_id: u7.id)
Follow.create(followee_id: u10.id, follower_id: u7.id)

Follow.create(followee_id: u1.id, follower_id: u8.id)
Follow.create(followee_id: u2.id, follower_id: u8.id)
Follow.create(followee_id: u3.id, follower_id: u8.id)
Follow.create(followee_id: u4.id, follower_id: u8.id)
Follow.create(followee_id: u5.id, follower_id: u8.id)
Follow.create(followee_id: u6.id, follower_id: u8.id)
Follow.create(followee_id: u7.id, follower_id: u8.id)
Follow.create(followee_id: u9.id, follower_id: u8.id)
Follow.create(followee_id: u10.id, follower_id: u8.id)

Follow.create(followee_id: u1.id, follower_id: u9.id)
Follow.create(followee_id: u2.id, follower_id: u9.id)
Follow.create(followee_id: u3.id, follower_id: u9.id)
Follow.create(followee_id: u4.id, follower_id: u9.id)
Follow.create(followee_id: u5.id, follower_id: u9.id)
Follow.create(followee_id: u6.id, follower_id: u9.id)
Follow.create(followee_id: u7.id, follower_id: u9.id)
Follow.create(followee_id: u8.id, follower_id: u9.id)
Follow.create(followee_id: u10.id, follower_id: u9.id)

Follow.create(followee_id: u1.id, follower_id: u10.id)
Follow.create(followee_id: u2.id, follower_id: u10.id)
Follow.create(followee_id: u3.id, follower_id: u10.id)
Follow.create(followee_id: u4.id, follower_id: u10.id)
Follow.create(followee_id: u5.id, follower_id: u10.id)
Follow.create(followee_id: u6.id, follower_id: u10.id)
Follow.create(followee_id: u7.id, follower_id: u10.id)
Follow.create(followee_id: u8.id, follower_id: u10.id)
Follow.create(followee_id: u9.id, follower_id: u10.id)

Follow.create(followee_id: u1.id, follower_id: u11.id)
Follow.create(followee_id: u2.id, follower_id: u11.id)
Follow.create(followee_id: u3.id, follower_id: u11.id)
Follow.create(followee_id: u4.id, follower_id: u11.id)
Follow.create(followee_id: u5.id, follower_id: u11.id)
Follow.create(followee_id: u6.id, follower_id: u11.id)
Follow.create(followee_id: u7.id, follower_id: u11.id)
Follow.create(followee_id: u8.id, follower_id: u11.id)
Follow.create(followee_id: u9.id, follower_id: u11.id)
Follow.create(followee_id: u10.id, follower_id: u11.id)

150.times do
  Like.create(stamp_id: rand(36) + s3.id, user_id: rand(10) + u1.id)
end

comments.each do |comment|
  sid = rand(36) + s3.id
  while sid == s22.id || sid == s23.id
    sid = rand(36) + s3.id
  end
  uid = rand(10) + u1.id
  while Stamp.find(sid).user_id == uid
    uid = rand(10) + u1.id
  end
  Comment.create(stamp_id: sid, user_id: uid, body: comment)
end
