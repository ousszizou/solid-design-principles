# GOOD DESIGN

class User:
  def __init__(self, name: str):
    self.name = name
    self.db = UserDB()

  def get_name(self):
    return self.name

  def get_user(self, id):
    return self.db.get_user(id)

  def save(self):
    self.db.save(user=self)

class UserDB:
  def get_user(self, id) -> User:
    print("get user with id: ",id)

  def save(self, user: User):
    print("save user to DB")
