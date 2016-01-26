# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


User.destroy_all
u1 = User.create(username: "nick", password: "password")
u2 = User.create(username: "johnny_rocket", password: "password")
u3 = User.create(username: "crabcakes17", password: "password")
u4 = User.create(username: "poultry_lover77", password: "password")
u5 = User.create(username: "slimjim1396", password: "password")

Stamp.destroy_all
s1 = Stamp.create(body: "Chicken parmesan", user_id: u1.id, image_url: "http://www.simplyscratch.com/wp-content/uploads/2013/03/Chicken-Parmesan.jpg")
s2 = Stamp.create(body: "Caesar salad", user_id: u1.id, image_url: "http://cdn.sheknows.com/articles/2012/11/ceasar-salad-recipe.jpg")
s3 = Stamp.create(body: "Shrimp fried rice", user_id: u1.id, image_url: "http://3.bp.blogspot.com/_WDQSCJJbY1M/TVMWsacEdnI/AAAAAAAADbQ/fouuIXDnO8A/s1600/DSC_6079.JPG")
s4 = Stamp.create(body: "Spaghetti and meatballs", user_id: u2.id, image_url: "http://cookdiary.net/wp-content/uploads/images/Spaghetti-and-Meatballs_16025.jpg")
s5 = Stamp.create(body: "Chicken marsala", user_id: u2.id, image_url: "http://daringgourmet.com/wp-content/uploads/2013/01/Chicken-Marsala-2-sm.jpg")
s6 = Stamp.create(body: "Pork tenderloin", user_id: u2.id, image_url: "http://www.melskitchencafe.com/wp-content/uploads/2014/01/tenderloin2.jpg")
s7 = Stamp.create(body: "Chicken and waffles", user_id: u3.id, image_url: "http://www.grandbaby-cakes.com/wp-content/uploads/2014/03/chicken-and-waffles-3-1024x682.jpg")
s8 = Stamp.create(body: "Will you just look at this sandwich", user_id: u3.id, image_url: "http://blog.silive.com/entertainment_impact_dining/2008/07/large_7-24dining.jpg")
s9 = Stamp.create(body: "Best pizza ever!", user_id: u3.id, image_url: "http://wallpaperlayer.com/img/2015/8/pizza-wallpaper-199-248-hd-wallpapers.jpg")
s10 = Stamp.create(body: "Amazing cookies", user_id: u4.id, image_url: "http://images.edge-generalmills.com/2ea0aafc-2942-4134-947f-847c043411ae.jpg")
s11 = Stamp.create(body: "Pasta carbonara", user_id: u4.id, image_url: "http://www.kusinamasterrecipes.com/wp-content/uploads/2015/02/Carbonara.jpg")
s12 = Stamp.create(body: "Filet mignon", user_id: u4.id, image_url: "http://grandwesternsteaks.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/f/m/fm_1.jpg")
s13 = Stamp.create(body: "Apple pie", user_id: u5.id, image_url: "http://images.media-allrecipes.com/images/52912.jpg")
s14 = Stamp.create(body: "Baked ziti", user_id: u5.id, image_url: "http://www.simplyrecipes.com/wp-content/uploads/2010/12/baked-ziti-horiz-640.jpg")
s15 = Stamp.create(body: "The halal guys are the best", user_id: u5.id, image_url: "http://newyork.seriouseats.com/images/2012/10/20121002-halal-taste-test-famous-halal-52nd-platter.jpg")
