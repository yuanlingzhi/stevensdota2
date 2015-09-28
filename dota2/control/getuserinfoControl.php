<?php session_start();
include_once "../domain/editusr.php";
include_once "../service/profile_service.php";
	if(isset($_SESSION['user']))
	{
		$username=($_SESSION['user']);
		$res=showProfile($username);
		$res=serialize($res);
		$_SESSION['userinfo']=$res;
		header("Location: ../profile.php");
	}
	else
	{
		header("Location: ../index.php");
	}

?>