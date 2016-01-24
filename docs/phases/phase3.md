# Phase 3: Comments, Follows, Likes and Tags (3 days)

## Rails
### Models
* Comment
* Tag
* Tagging
* Location
* Like
* Follow

### Controllers
* Api::CommentsController (create, destroy, index, show, update)
* Api::LikesController (create, destroy, index, show, update)
* Api::FollowsController (create, destroy, index, show, update)

### Views
* comments/index.json.jbuilder
* likes/index.json.jbuilder
* follows/index.json.jbuilder
* tags/show.json.jbuilder
* locations/show.json.jbuilder

## Flux
### Views (React Components)
* Map

### Stores
* Comments
* Likes
* Follows

### Actions
* ApiActions.receiveAllComments -> triggered by ApiUtil
* ApiActions.deleteComment
* ApiActions.receiveAllLikes -> triggered by ApiUtil
* ApiActions.deleteLike
* ApiActions.receiveAllFollows -> triggered by ApiUtil
* ApiActions.deleteFollow
* CommentActions.fetchAllComments -> triggers ApiUtil
* CommentActions.createComment
* CommentActions.editComment
* CommentActions.destroyComment


### ApiUtil
* ApiUtil.fetchAllComments
* ApiUtil.createComment
* ApiUtil.editComment
* ApiUtil.destroyComment
* ApiUtil.fetchAllLikes
* ApiUtil.createLikes
* ApiUtil.destroyLikes
* ApiUtil.fetchAllFollows
* ApiUtil.createFollow
* ApiUtil.destroyFollow

## Gems/Libraries
