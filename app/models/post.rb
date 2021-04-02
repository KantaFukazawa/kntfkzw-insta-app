class Post < ApplicationRecord
  belongs_to :user
  has_many :likes, dependent: :destroy
  has_many :comments, dependent: :destroy
  has_many_attached :images
  validates :content, presence: true

  def like_count
    likes.count
  end
end
