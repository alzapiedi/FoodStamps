class Api::CommentsController < ApplicationController
  def create
    comment = Comment.create(
      body: params[:body],
      stamp_id: params[:stamp_id],
      user_id: current_user.id
    )
    render json: comment
  end
end
