from database import CursorConnectionFromPool


class User:
    def __init__(self, email, first_name, last_name, id):
        self.email = email
        self.first_name = first_name
        self.last_name = last_name
        self.id = id

    def __repr__(self):
        return "<User {}>".format(self.email)

    def save_to_db(self):
        with CursorConnectionFromPool() as cursor:
            cursor.execute('INSERT INTO userss (email,first_name,las_name) VALUES(%s,%s,%s)',
                           (self.email, self.first_name, self.last_name))

    @classmethod
    def load_from_db_by(cls, email):
        with CursorConnectionFromPool() as cursor:
            cursor.execute('SELECT * FROM userss WHERE email=%s', (email,))
            user_data = cursor.fetchone()
            return cls(email=user_data[3], last_name=user_data[2], first_name=user_data[1], id=user_data[0])
