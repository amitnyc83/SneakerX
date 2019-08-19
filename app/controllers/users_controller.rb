class UsersController < ApplicationController

  def create
    @user = User.create(user_params)
    # exclamtion point so it gives us the user back that was just created
     # and an error message if there is one
     if @user.valid?
       token = JWT.encode({user_id: @user.id}, 'SECRET')
     render json: { id: @user.id, username: @user.username, type: @user.type, name: @user.name jwt:token }
    else
     render json: { error: "cannot get token" }, status: 422
   end
  end


  private

  def user_params
    params.require(:user).permit(:username, :password, :name, :type)
  end




end
