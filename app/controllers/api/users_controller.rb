class Api::UsersController < ApplicationController
  def show
    @current_user = current_user
    @me = current_user.id == params[:id].to_i
    @user = User.includes(:stamps).find(params[:id])
    @stamps = @user.stamps.order(created_at: :desc)
  end
end
