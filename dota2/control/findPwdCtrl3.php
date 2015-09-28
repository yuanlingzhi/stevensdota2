<?php
session_start();
include "../service/findpwdserv3.php";
if(isset($_SESSION['username']) && isset($_SESSION['question']) && 
	isset($_SESSION['question_id']) && isset($_SESSION['answer']))
{
	$u=$_SESSION['username'];
	$q1=$_SESSION['question_id'];
	$a1=$_SESSION['answer'];
	$cheatflag=judge_ischeat($u, $q1, $a1);
	if($cheatflag!=1)
		header("Location: ../findpwd.php");
	if(isset($_POST['newpass']) && isset($_POST['newcfm']))
	{	
		$p=$_POST['newpass'];
		$c=$_POST['newcfm'];
		$flag=judge_fpnewpass($u, $p, $c);
		if($flag==1) //username exists, update password
		{
			//create session
			//$_SESSION['user']=$u;
			header("Location: ../succeed.php");
		}		
		else //new password does not match re-type one (pass!=confirm)
		{
			$info="password does not match!";
			$info=base64_encode($info);
			$_SESSION['pwflag2']=1;
			header("Location: ../findpwd3.php?info=$info");
		}
	}
	else //password or confirm is not set
	{
		header("Location: ../findpwd.php");
	}
}
else //username is not set
{
	header("Location: ../findpwd.php");
}

?>