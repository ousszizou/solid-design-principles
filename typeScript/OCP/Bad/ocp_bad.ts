interface OSBad
{
  name: string;
}

class WindowsBad implements OSBad
{
  name : string;
  constructor()
  {
    this.name = "Microsoft Windows"
  }
}

class GNULinuxBad implements OSBad
{
  name : string;
  constructor()
  {
    this.name  = "GNU/Linux"
  }
}

class HostsBad
{

  constructor(private OpSys: OSBad) { }

  returnHostsDir()
  {
    if (this.OpSys.name == "GNU/Linux")
    {
      return "/etc/hosts"
    }
    else if (this.OpSys.name == "Microsoft Windows")
    {
      return "C:/Windows/System32/drivers/etc/hosts"
    }
  }

}
