class CreateTiles < ActiveRecord::Migration
  def change

    t.integer    :x_coordinate
    t.integer    :y_coordinate
    t.string     :color
    t.references :board

  end
end
