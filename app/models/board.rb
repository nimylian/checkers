class Board < ActiveRecord::Base

  has_many :players
  has_many :tiles
  has_many :pieces, through: :tiles
end
