interface OS
{
  name: string;
  hosts_dir: string;
  getHosts(): string;
}

class Windows implements OS
{

  name : string;
  hosts_dir : string;

  constructor()
  {
    this.name      = "Microsoft Windows"
    this.hosts_dir = "C:/Windows/System32/drivers/etc/hosts"
  }

  getHosts()
  {
    return this.hosts_dir
  }
}

class GNULinux implements OS
{

  name : string;
  hosts_dir : string;

  constructor()
  {
    this.name      = "GNU/Linux"
    this.hosts_dir = "/etc/hosts"
  }

  getHosts()
  {
    return this.hosts_dir
  }
}

class Hosts
{

  constructor(private OpSys: OS){}

  returnHostsDir()
  {
    return this.OpSys.getHosts()
  }

}
