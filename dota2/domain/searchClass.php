<?php

class result{
	private $name;
	private $url;
	public function getName() {
		return $this->name;
	}
	public function getUrl() {
		return $this->url;
	}
	public function setName($name) {
		$this->name = $name;
	}
	public function setUrl($url) {
		$this->url = $url;
	}
	public function __construct($n,$u){
		$this->name=$n;
		$this->url=$u;
	}
}
class chatResult
{
	private $replyn;
	private $name;
	private $url;
	private $content;
	public function getReplyn() {
		return $this->replyn;
	}
	public function setReplyn($replyn) {
		$this->replyn = $replyn;
	}

	public function getContent() {
		return $this->content;
	}
	public function setContent($content) {
		$this->content = $content;
	}

	public function getName() {
		return $this->name;
	}
	public function getUrl() {
		return $this->url;
	}
	public function setName($name) {
		$this->name = $name;
	}
	public function setUrl($url) {
		$this->url = $url;
	}
	public function __construct($n,$u,$c,$r){
		$this->name=$n;
		$this->url=$u;
		$this->content=$c;
		$this->replyn=$r;
	}
}



?>