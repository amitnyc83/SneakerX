class CartsController < ApplicationController


  # before_action :require_login, except: [:index, :show]


  def index
    carts = Cart.all
    render json: { carts: carts }
  end

  def show
    cart = Cart.find(params[:id])
    render json: { cart: cart }
  end


  def update
    cart = Cart.find(params[:id])
    cart.update(cart_params)
    render json: {message: "updated", cart: cart}

  def create
    cart = Cart.create(cart_params)
    if cart.valid?
      render json: { message: "Cart created", cart: cart }
    else
      render json: { message: "Cart not created" }
    end
  end

  def destroy
    cart = Cart.find(params[:id])
    cart.destroy
    render json: {message: "Cart has been destroyed"}
  end


  private

  def cart_params
    params.require(:cart).permit(:name, :quantity, :total_price, :ordered, :user_id, :product_id, :image)
  end
end
