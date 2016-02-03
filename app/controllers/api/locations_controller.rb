class Api::LocationsController < ApplicationController
  def show
    @current_user = current_user
    @stamps = Stamp.includes(:user).includes(:comments).includes(:likes).includes(:tags).where(location_id: params[:id])
    render 'api/feeds/show'
  end
end
