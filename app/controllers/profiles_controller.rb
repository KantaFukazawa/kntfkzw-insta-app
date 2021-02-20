class ProfilesController < ApplicationController
  before_action :authenticate_user!

  def show
    @profile = current_user.profile
  end

  def edit
    @profile = current_user.build_profile
  end

  def update
    @profile = current_user.build_profile(profile_params)
    @profile.assign_attributes(profile_params)
    respond_to do |format|
      if @profile.update(profile_params)
        format.html { redirect_to @profile }
        format.json { render json: { nickname: @profile.nickname, avatar: @profile.avatar } }
      end
    end
  end

  private
    def profile_params
      params[:profile].permit(:nickname, :avatar)
    end
end
