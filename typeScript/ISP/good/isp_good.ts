interface Eatable
{
  eat(): void;
}

interface Poopable
{
  poop(): void;
}

interface Crawalable
{
  crawl(): void;
}

interface Walkable
{
  walk(): void;
}


class SnakeGood implements Eatable, Poopable, Crawalable
{
  eat()
  {
    console.log("Snake eating")
  }
  poop()
  {
    console.log("Snake pooping")
  }
  crawl()
  {
    console.log("Snake crawling")
  }
}
