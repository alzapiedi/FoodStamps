class Api::StampsController < ApplicationController
  def create
    stamp = Stamp.new(stamp_params)
    stamp.user_id = current_user.id
    if stamp.save
      render json: stamp
    else
      render json: stamp.errors.full_messages
    end
  end

  def search
    @stamps = Stamp.stamp_search(params[:query])
    @current_user = current_user
    render 'api/feeds/show'
  end

  private
  def stamp_params
    params.require(:stamp).permit(:body, :image)
  end
end
