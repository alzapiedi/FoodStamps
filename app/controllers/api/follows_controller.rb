class Api::FollowsController < ApplicationController
  def create
    @follow = current_user.out_follows.create!(followee_id: params[:user_id])
    render json: @follow
  end
  def destroy
    @follow = current_user.out_follows.find_by(followee_id: params[:user_id])
    @follow.destroy!
    render json: @follow
  end
end
