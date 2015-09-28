<?php
session_start();
include_once "../domain/editusr.php";
include "../service/profile_service.php";


if(!isset($_SESSION['user']) || !isset($_FILES['pic']) ||  !isset($_POST['selfDes'])|| !isset($_FILES['pic']['name']))
{
	header("location:./login.php");
}
$sp="";
$sd="";
$obj;

$picinfo=$_FILES['pic'];
$sd=$_POST['selfDes'];
$sp=$_FILES['pic']['name'];  //picture name;
$u=$_SESSION['user'];



if(isset($_POST['newpassword'])&&isset($_POST['oldpassword'])&&isset($_POST['confirmpassword']))
{
	$password=$_POST['newpassword'];
	$oldpassword=$_POST['oldpassword'];
	$confirmpassword=$_POST['confirmpassword'];
	$obj=new editusr($u, $password, $oldpassword, $confirmpassword, $sd, $sp,null);
}
else{
	$obj=new editusr($u, null, null, null, $sd, $sp,null);
}	

$flag=editProfile($obj,$picinfo);
//1 is ok  //0 is wrong password 
if($flag==1)
{
	$obj=$_SESSION['userinfo'];
	$obj=unserialize($obj);
	if($sp!=null&&$picinfo['error']<=0)
	{
		$obj->setSelfpic($sp);
	}
	$obj->setSelfdescription($sd);
	$obj=serialize($obj);
	$_SESSION['userinfo']=$obj;
	header("Location: ../profile.php");
}
else if($flag==0)
{
	$info="WP";
	header("Location: ../profile.php?infopawd=$info");
}
else if($flag==-2)
{
	$info="CC";
	header("Location: ../profile.php?infopic=$info");
}
else
{
	header("Location: ../index.php");
}



?>