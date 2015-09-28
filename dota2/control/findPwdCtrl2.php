<?php
session_start();
include "../service/findpwdserv2.php";

if(isset($_SESSION['username']))
{
	$u=$_SESSION['username'];

	if(isset($_POST['answ']))
	{
		$a=$_POST['answ'];
		$_SESSION['answer']=$a;
		$flag=judge_fpans($u, $a);
		if($flag==1) //answer matches, OK to reset passward
		{
			$_SESSION['pwflag2']=1;
			header("Location: ../findpwd3.php");
		}		
		if($flag==0) //answer does not match
		{
			$info="incorrect answer!";
			$info=base64_encode($info);
			$_SESSION['pwflag1']=1;
			header("Location: ../findpwd2.php?info=$info");
		}
		if($flag==-1) //answer does not match regular expression
		{
			$info="invalid answer!";
			$info=base64_encode($info);
			$_SESSION['pwflag1']=1;
			header("Location: ../findpwd2.php?info=$info");
		}
	}
	else //answer is not set
	{
		header("Location: ../findpwd.php");
	}
}
else //username is not set
{
	header("Location: ../findpwd.php");
}


?>