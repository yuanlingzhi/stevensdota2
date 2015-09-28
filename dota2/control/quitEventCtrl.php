<?php
session_start();

include_once "../include/DatabaseClass.php";
include "../service/eventService.php";
include "../domain/eventClass.php";

if(isset($_SESSION['user']) && isset($_POST['eid']))
{
	$u=$_SESSION['user'];
	$eid=$_POST['eid'];
	$flag=quitEvent($u,$eid);
	if($flag==1)
	{
		header("location:../eventDetail.php?eid=".$eid);
	}
	elseif($flag==0)
	{
		echo "<script>alert('fail to delete')</script>";
		header("location:../eventDetail.php?eid=".$eid);
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