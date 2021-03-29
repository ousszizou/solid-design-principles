<?php

interface Coach
{
  public function leadTeam();
  public function leadPractice();
}

interface Player
{
  public function play();
  public function practice();
}

class BasketballCoach implements Coach
{
  public function leadTeam()
  {
    return 'Run your plays!';
  }

  public function leadPractice()
  {
    return 'Run another ladder...';
  }
}

class BasketballPlayer implements Player
{

    public function play()
    {
        return 'Triple double';
    }

    public function practice()
    {
        return 'Free throw practice shot number 9000 for today';
    }
}
