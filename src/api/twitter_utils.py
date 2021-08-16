import oauth2
import constans
import urllib.parse as urlparse

consumer = oauth2.Consumer(constans.CONSUMER_KEY, constans.CONSUMER_SECRET)


def get_request_token():
    client = oauth2.Client(consumer)

    response, content = client.request(constans.REQUEST_TOKEN_URL, 'POST')
    if response.status != 200:
        print("An error occured while requesting token!")
    return dict(urlparse.parse_qsl(content.decode('utf-8')))


def get_oauth_verifier(request_token):
    print("Go to the following site in your browser:")
    print()

    return input("What is the PIN? ")
def get_oauth_url(request_token):
    return "{}?oauth_token={}".format(constans.AUTHORIZATION_URL, request_token['oauth_token'])

def get_access_token(request_token,oauth_verifier):
    token = oauth2.Token(request_token['oauth_token'], request_token['oauth_token_secret'])
    token.set_verifier(oauth_verifier)

    client = oauth2.Client(consumer, token)
    # Ask Twitter for an access token, and Twitter knows it should give us it because we've verified the request
    response, content = client.request(constans.ACCESS_TOKEN_URL, 'POST')
    return dict(urlparse.parse_qsl(content.decode('utf-8')))