class ProfilesController < ApplicationController
  before_action :authenticate_user!

  def show
    @user = current_user
    @profile = current_user.profile
  end

  def edit
    @profile = current_user.build_profile
  end

  def update
    @profile = current_user.build_profile(profile_params)
    @profile.save!
  end

  private
    def profile_params
      params.require(:profile).permit(:nickname, :avatar)
    end
end