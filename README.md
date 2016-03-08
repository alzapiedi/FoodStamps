# [FoodStamps](http://www.foodstamps.io)

![FoodStamps1] (https://github.com/alzapiedi/foodstamps/screens/fs1.png)
![FoodStamps2] (https://github.com/alzapiedi/foodstamps/screens/fs2.png)

FoodStamps is a clone of the popular web application Instagram used to share photos of food, built using React.js and Ruby on Rails.  Users may create their own account, log in via Facebook, or demo the app by using one click guest login.

Once logged in, users may post "stamps," which are photos that can optionally have a comment (with tags/mentions) and location attached. Users will also see their feed, which is a collection of stamps posted by users they follow.  To find users to follow, you may use the search feature to find stamps by username, body of any comment, location or tags. Visiting a users page will give the option to follow or unfollow them and display all of their stamps.  Each stamp may be liked or commented on.

## How it Works

# Image Upload
Images are uploaded using the Paperclip gem and saved to AWS S3 cloud storage. When uploading an image a location may be tagged. This feature is enabled by the Google Maps API and Google Places API, and uses a Google Places autocomplete field to enhance the search process.

# Feed
The feed is composed of all images that have been posted by someone the user follows.  The feed data is retrieved from the database via AJAX request in batches of 10 to prevent excessive loading times.  I chose to implement a "load more" button rather than an infinite scroll in order to mirror the style of Instagram as closely as possible.

# Stamps
Each post that is retrieved from the database includes all of its comments (body, tags, mentions, username and ID), and information about current user such as whether you have liked this post.  This means all of the information required to make to app work is fetched in one single AJAX request.

# Users
When a users page is visited, the feed is then composed of only images posted by that user. Using this approach allowed me to render one component no matter whether a user is on their main feed page, a users show page, or a location show page.

# Tags and Mentions
Tags and mentions are created by prepending a word in a comment with # and @, respectively.  When the comment model is created on the server, it parses the string and creates the appropriate association.
The tricky part was getting these to render as the correct link.  The solution I used was to develop a method to parse the comment and build an HTML string that contained the correct links, then set that HTML as the comment body.
