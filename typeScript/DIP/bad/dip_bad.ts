class BlackCoffeeBad
{
  type = "Strong"
}

class CoffeePotBad
{
  constructor(private coffee: BlackCoffeeBad){}
  getType()
  {
    return this.coffee.type;
  }
}
