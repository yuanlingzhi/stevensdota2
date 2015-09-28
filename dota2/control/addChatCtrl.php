<?php
session_start();

include_once "../include/DatabaseClass.php";
include "../service/chatService.php";
include "../domain/chatClass.php";

if(isset($_SESSION['user']) && isset($_POST['theme']) && isset($_POST['content']))
{
	$t=$_POST['theme'];
	$c=$_POST['content'];
	$u=$_SESSION['user'];
	$check=preg_split("/\s/",$c);
	foreach ($check as $m)
	{
		if (strlen($m)>50) 
		{
			header("Location: ../chat.php");
			exit();
		}
	}
	$r=1;
	$ri=0;
	$obj=new chatClass($t,$u,$r,$c,$ri);

	$flag=addChat($obj);
	if($flag==1)
	{
		header("Location: ../chat.php");
	}
	elseif($flag==0)
	{
		header("Location: ../chat.php");
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