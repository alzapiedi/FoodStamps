class Api::LikesController < ApplicationController
  def create
    current_user.likes.create(stamp_id: params[:stamp_id])
    render json: {}
  end

  def destroy
    current_user.likes.find_by(stamp_id: params[:stamp_id]).destroy
    render json: {}
  end
end
