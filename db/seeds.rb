# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Cart.destroy_all


# testuser1 = User.create!(username: "testuser1", password_digest:BCrypt::Password.create('password'), name:"Jordan1")
# testuser2 = User.create!(username: "testuser2", password_digest:BCrypt::Password.create('password'), name:"Jordan2")
#
# cart1 = Cart.create!(name: "testcart1", quantity: 2, total_price: 20, ordered: false, user: testuser1)
# cart2 = Cart.create!(name: "testcart2", quantity: 4, total_price: 75, ordered: false, user: testuser2)


sneaker1 = Sneaker.create(name: "Jordan1 Low Sb ", brand: "Nike", description: "Following a trend of 2019 Jordan 1 Low releases, Jordan Brand teams up with Nike SB for the Nike SB Air Jordan 1 Low “UNC”, now available on StockX. This shoe draws inspiration from a classic Air Jordan 1 High model that originally released in 1985. The original design incorporated University Blue overlays, a color that has been made famous by Jordan’s alma mater, the University of North Carolina. This historic colorway combined with a long history of the skateboard communities love for the Jordan 1 made this a no brainer collaboration. ", price: 420, quantity: 10 )
sneaker2 = Sneaker.create(name: "Kyrie 5 SpongeBob", brand: "Nike", description: "Nike enlisted Nickelodeon’s SpongeBob SquarePants for another tv-themed collection, including the Nike Kyrie 5 “SpongeBob”, now available on StockX. This is Kyrie’s second tv-themed collaboration, the first being a tribute to the sitcom “Friends”. This collection consists of three Kyrie 5 models and two Kyrie Low 2s. All of SpongeBob’s main cast (SpongeBob, Patrick, Squidward, Mr. Krabs, and Sandy) is accounted for in the colorways and design inspiration for this collection. ", price: 180, quantity: 30 )
sneaker3 = Sneaker.create(name: "Yeezy Boost 350 V2", brand: "Adidas", description: "Like newer 350 V2 models, the adidas Yeezy Boost 350 V2 Lundmark sports a subtle summer color with the back heel tab removed. Replacing the SPLY-350 boost stripe that was traditionally found on the original 350s is a transparent stripe that reveals a more cream colored inner. A boost midsole is covered by a light tan rubber outsole that features a pink middle stripe. Adding to the exclusivity of these is the fact this colorway is a North and Latin America exclusive. ", price: 225, quantity: 25, sku: 9161 , cost: 70, seller_id: 1 )
