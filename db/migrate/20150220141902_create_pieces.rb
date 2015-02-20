class CreatePieces < ActiveRecord::Migration
  def change

    t.integer :x_coordinate
    t.integer :y_coordinate
    t.string  :color
    t.boolean :king, default: false

  end
end
