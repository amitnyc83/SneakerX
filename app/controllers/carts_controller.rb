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

  def create
    @cart = Cart.create(cart_params)
    # cart.user = current_user
    if @cart.save
      render json: { message: "Cart created", cart: @cart }
    else
      render json: { message: "Cart not created" }
    end
  end


  private

  def cart_params
    # params[:total_price] = params[:qauntity] * params[:total_price]
    params.require(:cart).permit(:name, :quantity, :total_price, :ordered, :user_id, :product_id)
  end


end
