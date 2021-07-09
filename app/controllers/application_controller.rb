class ApplicationController < ActionController::API
  include ActionController::Cookies

  def current_user 
    if decoded_token 
      id = decoded_token[0]["user_id"]
      User.find_by(id: id)
    end
  end
  
  def encode_token(payload)
    JWT.encode(payload, 'my_s3cr3t')
  end

  def auth_header
    request.headers['Authorization']
  end

  def decoded_token
    if auth_header
      token = auth_header.split(' ')[1]

      begin
        JWT.decode(token, 'my_s3cr3t', true, algorithm: 'HS256')

      rescue JWT::DecodeError
        nil
      end
    end
  end
end
