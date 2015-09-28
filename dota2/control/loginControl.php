<?php
session_start();
include "../service/login_service.php";

if(isset($_POST['username']) && isset($_POST['password']))
{
	$info="";
	$u=$_POST['username'];
	$p=$_POST['password'];
	$flag=judge_login($u, $p);
	if($flag==1) //username exists and password match, OK to log in
	{
		//create session
		$_SESSION['user']=$u;
		header("Location: ../index.php");
	}
	else if($flag==0) //username password does not match
	{
		$info="username and password doesn't match!";
		$info=base64_encode($info);
		header("Location: ../login.php?info=$info");
	}
	else if($flag==-1) //input does not match regular expression
	{
		$info="please input valid username and password!";
		$info=base64_encode($info);
		header("Location: ../login.php?info=$info");
	}
}
else //username and password is not set
{
	header("Location: ../index.php");
}

?>