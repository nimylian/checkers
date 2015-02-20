class Tile < ActiveRecord::Base

  belongs_to :board
  has_many   :pieces

end
