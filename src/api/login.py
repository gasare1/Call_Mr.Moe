import constans
import oauth2
import urllib.parse as urlparse
from  user import User
from database import Database
import constans
from twitter_utils import get_request_token,get_oauth_verifier,get_access_token


Database.initialize()

user_email = input("Enter your email address: ")

user = User.load_from_db_by(user_email)

if not user:

    request_token = user.get_request_token()
    oauth_verifier = get_oauth_verifier(request_token)
    access_token = get_access_token(request_token, oauth_verifier)


    first_name = input("What is you first name?: ")
    last_name = input("What is you lastname?:")

    user = User(user_email,first_name,last_name,access_token['oauth_token'],access_token['oauth_token_secret'],None)
    user.save_to_db()


tweets = user.twitter_request('https://api.twitter.com/1.1/search/tweets.json?q=computers+filter:images')

for tweet in tweets['statuses']:
    print(tweet['text'])