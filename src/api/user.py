from databasecon import CursorFromConnectionFromPool
import oauth2
import json


class User:
    def __init__(self, email, password, id):
        self.email= email
        self.password = password
        self.id = id
        
    def __repr__(self):
        return "<User {}>".format(self.email)
    def save_to_db(self):
        with CursorFromConnectionFromPool() as cursor:
            cursor.execute('INSERT INTO users (email, password ) VALUES (%s, %s)',
                           (self.email, self.password))

    @classmethod
    def load_from_db_by_email(cls, email):
        with CursorFromConnectionFromPool() as cursor:
            cursor.execute(""" SELECT * FROM users WHERE users.email = '$s'
            """, (email,))
            user_data = cursor.fetchone()
            if user_data:
                return cls( email = user_data[1], password = user_data[2], id = user_data[0])

    
    