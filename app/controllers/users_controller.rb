class UsersController < ApplicationController

    def index
        users = User.all
        render json: users 
    end

    def create
        user = User.create(user_params)
        render json: user
    end

    def update
        user = User.find_by(id: params[:id])
        if user 
            user.update(user_params)
            render json: user, status: :accepted
        else 
            render json: {error: "user not found!"}, status: :bad_request
        end
    end

    
    def destroy 
        user = User.find_by(id: params[:id])
        if user  
            user.destroy
            render json: {}, status: :no_content
        else 
            render json: {error: "no user found!"}, status: :not_found
        end
    end
    
    def show 
        user = User.find_by(id: params[:id])
        if user 
            render json: user, status: :ok
        else 
            render json: {error: "no user found!"}, status: :not_found 
        end
    end

    def login
        user = User.find_by(email: params[:email])
        if user
            render json: user
        else
            # byebug
            render json: { error: "Invalid email or password" },status: :unauthorized
        end
    end

    def me
        users = User.all
        render json: users 
    end



    private
    
    def user_params 
        params.permit(:name, :email, :age, :weight, :password)
    end

end
