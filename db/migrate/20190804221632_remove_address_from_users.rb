class RemoveAddressFromUsers < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :email, :remove
    remove_column :users, :address, :remove
    remove_column :users, :city, :remove
    remove_column :users, :state, :remove
    remove_column :users, :country, :remove
    remove_column :users, :zipcode, :remove
    remove_column :users, :auth_token, :remove
  end
end
