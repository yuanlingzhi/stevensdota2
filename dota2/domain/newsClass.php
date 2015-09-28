<?php
class newsClass
{
	private $title;
	private $user;
	private $content;

	function __construct($t,$c,$u)
	{
		$this->title=$t;
		$this->content=$c;
		$this->user=$u;
	}
	public function getContent()
	{
		return $this->content;
	}
	public function setContent($content)
	{
		$this->content=$content;
	}
	public function getTitle()
	{
		return $this->title;
	}
	public function setTitle($title)
	{
		$this->title=$title;
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