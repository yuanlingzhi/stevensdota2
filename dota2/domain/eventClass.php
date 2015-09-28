<?php
class chatClass
{
	private $type;
	private $name;
	private $time;
	private $location;
	private $limit;
	private $user;

	function __construct($t,$n,$ti,$loc,$l,$u)
	{
		$this->type=$t;
		$this->name=$n;
		$this->time=$ti;
		$this->location=$loc;
		$this->limit=$l;
		$this->user=$u;
	}
	public function getEventType()
	{
		return $this->type;
	}
	public function setEventType($type)
	{
		$this->type=$type;
	}
	public function getName()
	{
		return $this->name;
	}
	public function setName($name)
	{
		$this->name=$name;
	}
	public function getTime()
	{
		return $this->time;
	}
	public function setTime($time)
	{
		$this->time=$time;
	}
	public function getLocation()
	{
		return $this->location;
	}
	public function setLocation($location)
	{
		$this->location=$location;
	}
	public function getLimit()
	{
		return $this->limit;
	}
	public function setLimit($limit)
	{
		$this->limit=$limit;
	}
	public function getUser()
	{
		return $this->user;
	}
	public function setUser($user)
	{
		$this->user=$user;
	}
}
?>