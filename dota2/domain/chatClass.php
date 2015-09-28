<?php
class chatClass
{
	private $theme;
	private $user;
	private $replies;
	private $content;
	private $reply_id;

	function __construct($t,$u,$r,$c,$ri)
	{
		$this->theme=$t;
		$this->user=$u;
		$this->replies=$r;
		$this->content=$c;
		$this->reply_id=$ri;
	}
	public function getTheme()
	{
		return $this->theme;
	}
	public function setTheme($theme)
	{
		$this->theme=$theme;
	}
	public function getReplies()
	{
		return $this->replies;
	}
	public function setReplies($replies)
	{
		$this->replies=$replies;
	}
	public function getUser()
	{
		return $this->user;
	}
	public function setUser($user)
	{
		$this->user=$user;
	}
	public function getContent()
	{
		return $this->content;
	}
	public function setContent($content)
	{
		$this->content=$content;
	}
	public function getReplyId()
	{
		return $this->reply_id;
	}
	public function setReplyId($reply_id)
	{
		$this->reply_id=$reply_id;
	}
}
?>