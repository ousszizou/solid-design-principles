interface IAnimal
{
  eat(): void;
  poop(): void;
  walk(): void;
}

class SnakeBad implements IAnimal
{
  eat()
  {
    console.log("Snake eating")
  }
  poop()
  {
    console.log("Snake pooping")
  }
  walk()
  {
    console.log("Snake... uhm...")
  }
}
