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

class BasketballPlayerAndCoach implements Player, Coach
{

  public function leadTeam()
  {
    return 'Score or you will be running ladders';
  }

  public function leadPractice()
  {
    return 'Run ladders';
  }

  public function play()
  {
    return 'I am going to score points';
  }

  public function practice()
  {
    return 'Running ladders';
  }
}
