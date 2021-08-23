from abc import get_cache_token
from flask import Flask
from flask import jsonify
from user import User
from flask import Flask, render_template, session, redirect, request, url_for, g
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from flask_jwt_extended import JWTManager
from databasecon import Database
from flask_cors import CORS

app = Flask(__name__, static_folder='../../build')

CORS(app)
app.secret_key = '1234'

Database.initialise()
# Setup the Flask-JWT-Extended extension
app.config["JWT_SECRET_KEY"] = "hkajhskjdhakjhsjkdhaksjydkagsbvhdajkshdas4546asd"  # Change this!
jwt = JWTManager(app)


# Create a route to authenticate your users and return JWTs. The
# create_access_token() function is used to actually generate the JWT.

        
@app.route("/login", methods=["POST"])
def login():
    user = User.load_from_db_by_email(['email'])
    print(user)

    email =  request.json.get("email")
    password = request.json.get("password")
    if email != user.email or password != user.password :
        print("You entered", user,password)
        return jsonify({"msg": "Bad username or password"}), 401

    access_token = create_access_token(identity=email)
    print(access_token)
    return jsonify(access_token=access_token)

@app.route('/logout')
def logout():
    session.clear()
    return redirect(url_for('profile'))



@app.route("/register", methods = ['POST'])
def register():
    user = User.load_from_db_by_email(['email'])
    email =  request.json.get("email")
    password = request.json.get("password")
    if user :
        user = User(email, password,
                 None)
        user.save_to_db()
    print(user)
    return jsonify({"msg": "You have been Registered"}), 200

  
    

@app.route('/profile')
def profile():
    return render_template('home.html', user=g.user)

# Protect a route with jwt_required, which will kick out requests
# without a valid JWT present.
@app.route("/protected", methods=["GET"])


@jwt_required()
def protected():
    # Access the identity of the current user with get_jwt_identity
    current_user = get_jwt_identity()
    return jsonify(logged_in_as=current_user), 200


if __name__ == "__main__":
    app.run()