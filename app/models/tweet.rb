class Tweet < ActiveRecord::Base

  belongs_to :user
  has_one :tag
  has_many :comments, dependent: :destroy
end

