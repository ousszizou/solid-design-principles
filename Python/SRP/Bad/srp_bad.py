# BAD DESIGN

# class which has two responsibilities
class User:
  def __init__(self, name: str):
    self.name = name

  def get_name(self) -> str:
    return self.name

  def save(self, user: User):
    print("save user to DB")
