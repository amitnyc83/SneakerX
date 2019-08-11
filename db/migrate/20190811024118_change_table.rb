class ChangeTable < ActiveRecord::Migration[5.2]
  def change
    rename_table :products, :sneakers 
  end
end
