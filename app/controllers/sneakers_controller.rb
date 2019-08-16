class SneakersController < ApplicationController

  def index
    render json: Sneaker.all
  end


  def create
    @sneaker = Sneaker.create(sneaker_params)
    if @sneaker.save
      render json: @shoe
    else
      render json: { message: @sneaker.errors }, status: 400
    end
  end


  private

  def set_sneaker
    @sneaker =Sneaker.find_by(id: params[:id])
  end

  def sneaker_params
    params.require(:sneaker).permit(:name, :description, :price, :quantity, :sku, :cost, :brand, :seller_id, :image)
  end

end
