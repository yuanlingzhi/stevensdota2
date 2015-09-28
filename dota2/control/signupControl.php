<?php
session_start();
include_once "../domain/signupClass.php";
include "../service/signup_service.php";
if(isset($_POST['login'])&&isset($_POST['questionId'])&&isset($_POST['pwd'])&&isset($_POST['email'])&&
isset($_POST['ans'])&&isset($_POST['pwdcfm']))
{
	$u=$_POST['login'];
	$s=$_POST['questionId'];
	$p=$_POST['pwd'];
	$e=$_POST['email'];
	$a=$_POST['ans'];
	$c=$_POST['pwdcfm'];
	$obj=new signupClass($u, $e, $p,$c, $s, $a);
	//1 succeed   -1 failed    0 cheat
	$flag=judge_signup($obj);
	if($flag==1)
	{
		//create session
		$_SESSION['user']=$u;
		header("Location: ../index.php");
	}
	else
	{
		header("Location: ../index.php");
	}

}
else
{
	header("Location: ../index.php");
}

?>