<?php
session_start();
include_once "../domain/message.php";
include_once "../service/deleteMessageService.php";
if(isset($_POST['type'])&&isset($_POST['index'])&&isset($_SESSION['user']))
{
	$t=$_POST['type'];
	$i=$_POST['index'];
	$obj=$_SESSION['message'];
	$obj=unserialize($obj);
	$obj1=$obj[$t][$i];
	if($obj1==null)
	{
		if($t==0)
			header("Location: ../inbox.php?type=sent");
		else
			header("Location: ../inbox.php?type=inbox");
	}
	$temp=deleteMessageService($obj1,$t);
	$obj[$t][$i]=$temp;
	$obj=serialize($obj);
	$_SESSION['message']=$obj;
	if($t==0)
		header("Location: ../inbox.php?type=sent");
	else
		header("Location: ../inbox.php?type=inbox");
}
else
{
	header("Location: ../index.php");
}


?>