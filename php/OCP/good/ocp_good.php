<?php

interface ShippingInterface {
  public function getCost($order);
}

class GroundShipping implements ShippingInterface {

  public function getCost(Order $order) {
    if ($order->getTotal() > 100) {
      return 0;
    }

    return max(10, $order->getTotalWeight() * 1.5);
  }
}

class AirShipping implements ShippingInterface {

  public function getCost(Order $order) {
    return max(20, $order->getTotalWeight() * 3);
  }
}

class Order {
  protected $shipping;

  public function setShippingType(ShippingInterface $shipping)
  {
    $this->shipping = $shipping;
  }

  public function getShippingCost()
  {
    return $this->shipping->getCost($this);
  }
}
