<?php
session_start();
include_once "../domain/message.php";
include_once "../service/getAllMessageService.php";
if(isset($_SESSION['user']))
{
	$n=$_SESSION['user'];
	$all=getAllMessageService($n);
	if($all==-1)                          //get all message failed , may be db down
	{
		header("Location:../index.php");
	}else
	{
		$all=serialize($all);
		$_SESSION['message']=$all;
		header("Location: ../inbox.php?type=0");
	}
}
else
{
	header("Location:../index.php");
}

?>