class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :avatar_url
  has_one :profile
  has_many :comments

  def avatar_url
    Rails.application.routes.url_helpers.rails_blob_path(object.profile.avatar, only_path: true) if object.profile.avatar.attached?
  end
end
