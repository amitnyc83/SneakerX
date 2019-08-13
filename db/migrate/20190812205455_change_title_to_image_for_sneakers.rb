class ChangeTitleToImageForSneakers < ActiveRecord::Migration[5.2]
  def change
    rename_column :sneakers, :title, :image
  end
end
