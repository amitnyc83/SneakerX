class Sneaker < ApplicationRecord
 has_many :sellers, class_name: "Seller"
 has_many :customers, class_name: "Customer"
end
