<?php
session_start();

include_once "../include/DatabaseClass.php";
include "../service/eventService.php";
include "../domain/eventClass.php";

if(isset($_SESSION['user']) && isset($_POST['type']) && isset($_POST['name']) && isset($_POST['time']) && isset($_POST['date']) && isset($_POST['location']) && isset($_POST['limit']))
{
	$t=$_POST['type'];
	$n=$_POST['name'];
	$loc=$_POST['location'];
	$l=$_POST['limit'];
	$d=$_POST['date'];
	$time=$_POST['time'];
	$ti=$d." ".$time.":00";
	$u=$_SESSION['user'];
	$obj=new chatClass($t,$n,$ti,$loc,$l,$u);
	$flag=createEvent($obj);
	if($flag==1)
	{
		header("Location: ../event.php");
	}
	elseif($flag==0)
	{
		header("Location: ../event.php");
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