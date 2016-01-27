class Api::UsersController < ApplicationController
  def show
    @current_user = current_user.id == params[:id].to_i
    @stamps = Stamp.includes(:user).where(user_id: params[:id])
  end
end
