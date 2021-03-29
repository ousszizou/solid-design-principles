<?php

class Order {
  protected $shipping;

  public function setShippingType($shipping)
  {
    $this->shipping = $shipping;
  }

  public function getShippingCost()
  {
    if($this->shipping == "ground") {
      if ($this->getTotal() > 100) {
        return 0;
      }

      return max(10, $this->getTotalWeight() * 1.5);
    }

    if ($this->shipping == "air") {
      return max(20, $this->getTotalWeight() * 3);
    }
  }

}
