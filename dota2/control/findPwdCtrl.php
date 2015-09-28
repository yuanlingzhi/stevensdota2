<?php
session_start();
include "../service/findpwdserv.php";

if(isset($_POST['username']))
{
	$info="";
	$u=$_POST['username'];
	$_SESSION['username']=$u;
	$qstid= judge_fpusr($u);
	$qst="error";
	if($qstid==1)
	{
		$qst="What is the first name of your favorate teacher in high school?";
		$_SESSION['question']=$qst;
		$_SESSION['question_id']=$qstid;
		$_SESSION['pwflag1']=1;
		header("Location: ../findpwd2.php");
	}
	if($qstid==2)
	{
		$qst="Who is your best childhood friend?";
		$_SESSION['question']=$qst;
		$_SESSION['question_id']=$qstid;
		$_SESSION['pwflag1']=1;
		header("Location: ../findpwd2.php");
	}
	if($qstid==3)
	{
		$qst="What was the name of your elementary/primary school?";
		$_SESSION['question']=$qst;
		$_SESSION['question_id']=$qstid;
		$_SESSION['pwflag1']=1;
		header("Location: ../findpwd2.php");
	}
	if($qstid==4)
	{
		$qst="In what city or town did you meet your spouse/partner?";
		$_SESSION['question']=$qst;
		$_SESSION['question_id']=$qstid;
		$_SESSION['pwflag1']=1;
		header("Location: ../findpwd2.php");
	}
	if($qstid==5)
	{
		$qst="What is the last name of the teacher who gave you your first failing grade?";
		$_SESSION['question']=$qst;
		$_SESSION['question_id']=$qstid;
		$_SESSION['pwflag1']=1;
		header("Location: ../findpwd2.php");
	}
	if($qstid==6)
	{
		$qst="What is the first name of the person you first kissed?";
		$_SESSION['question']=$qst;
		$_SESSION['question_id']=$qstid;
		$_SESSION['pwflag1']=1;
		header("Location: ../findpwd2.php");
	}
	if($qstid==7)
	{
		$qst="What was your favorite place to visit as a child?";
		$_SESSION['question']=$qst;
		$_SESSION['question_id']=$qstid;
		$_SESSION['pwflag1']=1;
		header("Location: ../findpwd2.php");
	}
	elseif($qstid==0)	//username not exist in database
	{
		$info="username doesn't exist!";
		$info=base64_encode($info);
		header("Location: ../findpwd.php?info=$info");
	}
	elseif($qstid==-1)	//username dose not match Regular Expression
	{
		$info="please input valid username!";
		$info=base64_encode($info);
		header("Location: ../findpwd.php?info=$info");
	}
}
else //username is not set
{
	header("Location: ../findpwd.php");
}

?>