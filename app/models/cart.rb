class Cart < ApplicationRecord
  belongs_to :user
  belongs_to :sneaker, optional: true
  validates :quantity, presence: true
end
