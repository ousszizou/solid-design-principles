interface ICoffee
{
  type: string;
}

class BlackCoffee implements ICoffee
{
  type = "Strong"
}

class LatteCoffee implements ICoffee
{
  type = "Light"
}

class CoffeePot
{

  constructor(private coffee: ICoffee){}
  getType()
  {
    return this.coffee.type;
  }
}
