class ChangeDetailsToSneakers < ActiveRecord::Migration[5.2]
  def change
    rename_column :sneakers, :weight, :brand
  end
end
