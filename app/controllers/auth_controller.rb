class AuthController < ApplicationController

  def create
    user = User.find_by(username: auth_params[:username])
    if user && user.authenticate(auth_params[:password])
      # render json: { user_id: use.id, username: user.username }
      token = JWT.encode({user_id: user.id}, 'SECRET')
      render json: {user: user.username, user: user.id jwt: token}
    else
      render json: { message: "Invalid Password" }, status: 400
    end
  end

  def show
    string = request.authorization
    token = JWT.decode(string, 'SECRET')[0]
    id = token['user_id'].to_i
    @user = User.find(token)
    if @user
      render json: { user_id: @user.id, username: @user.username }
    else
      render json: { error: "User not found" }, status: 422
    end
  end

  private


  def auth_params
    params.require(:user).permit(:username, :password )
  end

end
