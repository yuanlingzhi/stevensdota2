<?php
class editusr{
	
	private $username;
	private $newpassword;
	private $oldpassword;
	private $newconfirm;
	private $selfdescription;
	private $selfpic;
	private $email;
	function __construct($u,$np,$op,$nc,$sd,$sp,$em) {
		$this->username=$u;
		$this->newpassword=$np;
		$this->oldpassword=$op;
		$this->newconfirm=$nc;
		$this->selfdescription=$sd;
		$this->selfpic=$sp;
		$this->email=$em;
	}
	public function getEmail() {
		return $this->email;
	}
	public function setEmail($email) {
		$this->email = $email;
	}

	public function getUsername() {
		return $this->username;
	}
	public function getNewpassword() {
		return $this->newpassword;
	}
	public function getOldpassword() {
		return $this->oldpassword;
	}
	public function getNewconfirm() {
		return $this->newconfirm;
	}
	public function getSelfdescription() {
		return $this->selfdescription;
	}
	public function getSelfpic() {
		return $this->selfpic;
	}
	public function setUsername($username) {
		$this->username = $username;
	}
	public function setNewpassword($newpassword) {
		$this->newpassword = $newpassword;
	}
	public function setOldpassword($oldpassword) {
		$this->oldpassword = $oldpassword;
	}
	public function setNewconfirm($newconfirm) {
		$this->newconfirm = $newconfirm;
	}
	public function setSelfdescription($selfdescription) {
		$this->selfdescription = $selfdescription;
	}
	public function setSelfpic($selfpic) {
		$this->selfpic = $selfpic;
	}

	
	
}

?>