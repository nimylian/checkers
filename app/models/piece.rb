class Piece < ActiveRecord::Base

  belongs_to :player
  belongs_to :tile

end
