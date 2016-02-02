class Api::UsersController < ApplicationController
  def show
    if params[:id].to_i == 0
      render json: User.find_by_username(params[:id]).id
    else
      @current_user = current_user
      @user = User.includes(:stamps).find(params[:id])
      @stamps = @user.stamps.order(created_at: :desc)
    end
  end

  def create
    @user = User.new(username: params[:username], password: params[:password])
    if @user.save
      log_in(@user)
      @current_user = @user
      render :show
    else
      render json: @user.errors.full_messages
    end
  end

  def update
    user = User.find(params[:id])
    user.update(user_params)
    render json: {}
  end

  private
  def user_params
    params.require(:user).permit(:username, :avatar)
  end
end
