<?php
include_once ('../domain/signupClass.php');

function verifySignUp($obj)
{
		$result = 1;
		$username=$obj->getUsername();
		$email=$obj->getEmail();
		$password=$obj->getPassword();
		$confirm=$obj->getConfirm();
		//$securityId=$obj->getSecurityId();
		$answer=$obj->getAnswer();
		
		if(!isUsername($username))
			$result = 0;
		if(!isEmail($email))
			$result = 0;
		if(!isPassword($password))
			$result = 0;
		if(!isConfirm($password, $confirm))
			$result = 0;
		if(!isAnswer($answer))
			$result = 0;
			
		return ($result);
}

function verifyLogIn($u, $p)
{
	$result = 1;
	if(!isUsername($u))
		$result = 0;
	if(!isPassword($p))
		$result = 0;
	return $result;
}

function verifyfpusrname($u)
{
	$result = 1;
	if(!isUsername($u))
		$result = 0;
	return $result;
}

function verifyfpans($a)
{
	$result = 1;
	if(!isAnswer($a))
		$result = 0;
	return $result;
}

function verifyfppwd($p,$c)
{
	$result = 1;
	if(!isPassword($p))
		$result = 0;
	if(!isConfirm($p, $c))
		$result = 0;
	return $result;
}

function verifyfpischeat($u,$a1)
{
	$result = 1;
	if(!isUsername($u))
		$result = 0;
	if(!isAnswer($a1))
		$result = 0;
	return $result;
}


//child function------------------------------------------------------
function isUsername($u){
	return preg_match("/^[a-zA-Z0-9_][a-zA-Z0-9_]{1,13}[a-zA-Z0-9_]$/", $u);
}

function isEmail($e){
	if(strlen($e)>100) return false;
	return preg_match("/^[a-zA-Z0-9_][a-zA-Z0-9_.-]{2,}@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]*[a-zA-Z0-9-.]$/", $e);
}

function isPassword($p){
	return preg_match("/^[a-zA-Z0-9][a-zA-Z0-9]{4,18}[a-zA-Z0-9]$/", $p);
}

function isConfirm($p, $c){
	if($p!=$c)
		return false;
	return true;
}

function isAnswer($a){
	return preg_match("/(^[a-zA-Z0-9][a-zA-Z0-9]{0,98}[a-zA-Z0-9]$)|(^[a-zA-Z0-9]$)/", $a);
}

?>