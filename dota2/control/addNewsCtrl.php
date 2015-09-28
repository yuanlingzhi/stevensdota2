<?php
session_start();

include_once "../include/DatabaseClass.php";
include "../service/newsService.php";
include "../domain/newsClass.php";

if(isAdmin() && isset($_POST['title']) && isset($_POST['content']))
{
	$t=$_POST['title'];
	$c=$_POST['content'];
	$u=$_SESSION['user'];	
	$check=preg_split("/\s/",$c);
	foreach ($check as $m)
	{
		if (strlen($m)>50) 
		{
			header("Location: ../news.php");
			exit();
		}
	}
	$obj=new newsClass($t,$c,$u);
	$flag=addNews($obj);
	if($flag==1)
	{
		header("Location: ../news.php");
	}
	elseif($flag==0)
	{
		header("Location: ../news.php");
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