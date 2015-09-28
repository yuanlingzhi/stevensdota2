<?php
class signupClass {
	private $username;
	private $email;
	private $password;
	private $confirm;
	private $securityId;
	private $answer;
	
	public function getConfirm() {
		return $this->confirm;
	}
	public function setConfirm($confirm) {
		$this->confirm = $confirm;
	}

	function __construct($u,$e,$p,$c,$s,$a) {
		$this->username=$u;
		$this->confirm=$c;
		$this->email=$e;
		$this->password=$p;
		$this->securityId=$s;
		$this->answer=$a;		
	}
	public function getUsername() {
		return $this->username;
	}

	public function getEmail() {
		return $this->email;
	}

	public function getPassword() {
		return $this->password;
	}


	public function getSecurityId() {
		return $this->securityId;
	}

	public function getAnswer() {
		return $this->answer;
	}

	public function setUsername($username) {
		$this->username = $username;
	}

	public function setEmail($email) {
		$this->email = $email;
	}


	public function setPassword($password) {
		$this->password = $password;
	}

	public function setSecurityId($securityId) {
		$this->securityId = $securityId;
	}
	public function setAnswer($answer) {
		$this->answer = $answer;
	}

}

?>