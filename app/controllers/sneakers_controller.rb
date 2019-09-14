class SneakersController < ApplicationController

  def index
    render json: Sneaker.all
  end


  def show
    sneaker = Sneaker.find(params[:id])
    render json: {sneaker: sneaker}
  end



  def create
    sneaker = Sneaker.create(sneaker_params)
    if sneaker.save
      render json: {name: sneaker.name, description: sneaker.description, price: sneaker.price, quantity: sneaker.quantity, sku: sneaker.sku, cost: sneaker.cost, brand: sneaker.brand, seller_id: sneaker.seller_id, image: sneaker.image}
    else
      render json: { message: "Cannot add Sneaker" }, status: 400
    end
  end

  def update
    sneaker = Sneaker.find(params[:id])
    sneaker.update(sneaker_params)
    render json: {sneaker: sneaker, message: "Quantity has been updated"}
  end


  def destroy
    sneaker = Sneaker.find(params[:id])
    sneaker.destroy
    render json: {message: "Sneaker has been deleted"}
  end

  private

  def set_sneaker
    @sneaker = Sneaker.find_by(id: params[:id])
  end

  def sneaker_params
    params.require(:sneaker).permit(:name, :description, :price, :quantity, :sku, :cost, :brand, :seller_id, :image)
  end

end
