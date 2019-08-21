class ChangeColumnsToBeStringInCarts < ActiveRecord::Migration[5.2]
  def up
    change_column :carts, :quantity, :string
    change_column :carts, :total_price, :string
  end


  def down
    change_column :carts, :quantity, :integer
    change_column :carts, :total_price, :integer 
  end
end
