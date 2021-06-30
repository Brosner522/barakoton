class UsersController < ApplicationController

    def index
        users = User.all
        render json: users 
    end

    def create
        user = User.create(user_params)
        render json: user
    end
    # def create 
    #     user = User.new(user_params)
    #     if user.valid?
    #         user.save
    #         token = encode_token({
    #             user_id: user.id 
    #         })
    #         render json: {user: user, token: token}, status: :created
    #     else 
    #         render json: {error: user.errors.full_messages}, status: 400
    #     end
    # end

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
    
    private
    
    def user_params 
        params.permit(:name, :email, :age, :weight, :password)
    end


end
