from flask import Flask, render_template, request, redirect, jsonify




app = Flask(__name__)
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = "postgresql://fvfkyplb:xNtNNQZjhMksOec28bJH_g_gisWeZAcZ@chunee.db.elephantsql.com/fvfkyplb"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
# Change this!
app.config["JWT_SECRET_KEY"] = "hkajhskjdhakjhsjkdhaksjydkagsbvhdajkshdas4546asd"

app.secret_key = '1234'
jwt = JWTManager(app)

db.init_app(app)
login.init_app(app)
login.login_view = 'login'





@app.route('/loginuser', methods=['POST', 'GET'])
def login():
    if current_user.is_authenticated:
        return redirect('/home')

    if request.method == 'POST':
        email = request.json.get ('email')
        password = request.json.get('password')
        user = Login.query.filter_by(email=email).first()
        if user is not None and user.check_password(password):
            print(login_user(user))
            print(current_user)
            return redirect('/registeruser')

    access_token = create_access_token(identity=email)
    print(access_token)
    return jsonify(access_token=access_token)


@app.route('/logout')
def logout():
    logout_user()
    return redirect('/blogs')


app.run(host='localhost', port=5000)
