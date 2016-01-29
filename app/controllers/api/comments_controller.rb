class Api::CommentsController < ApplicationController
  def create
    comment = Comment.create(
      body: params[:body],
      stamp_id: params[:stamp_id],
      user_id: current_user.id
    )
    username = current_user.username
    render json: {
      body: comment.body,
      id: comment.id,
      user_id: comment.user_id,
      username: username
    }
  end
end
