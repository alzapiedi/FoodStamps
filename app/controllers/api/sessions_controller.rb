class Api::SessionsController < ApplicationController

  def show
    if current_user
      @user = current_user
      render "api/users/show"
    else
      render json: {}
    end
  end

  def create
    @user = User.find_by_credentials(params[:username], params[:password])
    if @user
      log_in(@user)
      @current_user = @user
      render 'api/users/show'
    else
      render json: ["Invalid Username or Password"]
    end
  end

  def destroy
    log_out
    render json: {}
  end

end
