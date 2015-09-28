<?php 
class message{
	private $from;
	private $to;
	private $content;
	private $isRead;
	private $date;
	private $id;
	private $sender_show;
	private $getter_show;
	public function getSender_show() {
		return $this->sender_show;
	}
	public function getGetter_show() {
		return $this->getter_show;
	}
	public function setSender_show($sender_show) {
		$this->sender_show = $sender_show;
	}
	public function setGetter_show($getter_show) {
		$this->getter_show = $getter_show;
	}

	public function __construct($f,$t,$c,$i)
	{
		$this->from=$f;
		$this->to=$t;
		$this->content=$c;
		$this->isRead=$i;
		$this->getter_show=0;
		$this->sender_show=0;
	}
	public function getId() {
		return $this->id;
	}
	public function setId($id) {
		$this->id = $id;
	}

	public function getDate()
	{
		return $this->date;
	}
	public function setDate($date){
		$this->date=$date;
	}
	public function getFrom() {
		return $this->from;
	}


	public function getTo() {
		return $this->to;
	}


	public function getContent() {
		return $this->content;
	}

	public function getIsRead() {
		return $this->isRead;
	}

	public function setFrom($from) {
		$this->from = $from;
	}


	public function setTo($to) {
		$this->to = $to;
	}


	public function setContent($content) {
		$this->content = $content;
	}



	public function setIsRead($isRead) {
		$this->isRead = $isRead;
	}

}
?>