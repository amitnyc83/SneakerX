class ChangeColumnsToBeStringInSneakers < ActiveRecord::Migration[5.2]
  def up
    change_column :sneakers, :price, :string
    change_column :sneakers, :quantity, :string
    change_column :sneakers, :sku, :string
    change_column :sneakers, :cost, :string
  end


  def down
    change_column :sneakers, :price, :decimal
    change_column :sneakers, :quantity, :integer
    change_column :sneakers, :sku, :integer
    change_column :sneakers, :cost, :decimal
  end
end
