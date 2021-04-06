class Profile < ApplicationRecord
  belongs_to :user
  has_one_attached :avatar

  def display_name
    profile.nickname
  end
end
