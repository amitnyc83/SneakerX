class ChangeBrandTypeToSneakers < ActiveRecord::Migration[5.2]
  def change
      change_column :sneakers, :brand, :string
  end
end
