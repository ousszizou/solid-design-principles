<?php

interface RestaurantInterface
{
  public function  acceptOnlineOrder();
  public function  payOnline();
  public function  walkInCustomerOrder();
  public function  payInPerson();
}

class OnlineClient implements RestaurantInterface
{
  public function  acceptOnlineOrder()
  {
    //logic for placing online order
  }

  public function  payOnline()
  {
    //logic for paying online 
  }

  public function  walkInCustomerOrder()
  {
    //logic here ...
  }

  public function  payInPerson()
  {
    //logic here ...
  }
}

