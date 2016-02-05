class Api::CommentsController < ApplicationController
  def create
    comment = Comment.create(
      body: params[:body],
      stamp_id: params[:stamp_id],
      user_id: current_user.id
    )
    username = current_user.username
    mentions = comment.mentions.map { |mention| { user_id: mention.user_id, username: mention.user.username } }
    render json: {
      body: comment.body,
      id: comment.id,
      user_id: comment.user_id,
      username: username,
      stamp_id: comment.stamp_id,
      mentions: mentions
    }
  end

  def destroy
    comment = Comment.find(params[:id])
    if comment.user_id == current_user.id
      comment.destroy
    end
    render json: {}
  end
end
