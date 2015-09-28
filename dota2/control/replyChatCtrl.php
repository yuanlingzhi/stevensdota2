<?php
session_start();

include_once "../include/DatabaseClass.php";
include "../service/chatService.php";
include "../domain/chatClass.php";

if(isset($_SESSION['user']) && isset($_POST['content']) && isset($_GET['cid']))
{
	$c=$_POST['content'];
	$check=preg_split("/\s/",$c);
	foreach ($check as $m)
	{
		if (strlen($m)>50) 
		{
			header("Location: ../chatDetail.php?cid=".$_GET['cid']);
			exit();
		}
	}
	$u=$_SESSION['user'];
	$ri=getReplyId($_GET['cid']);
	$obj=new chatClass(null,$u,null,$c,$ri);
	$flag=replyChat($obj,$_GET['cid']);
	if($flag==1)
	{
		header("location:../chatDetail.php?cid=".$_GET['cid']);
	}
	elseif($flag==0)
	{
		header("location:../chatDetail.php?cid=".$_GET['cid']);
	}
	elseif($flag==-2)
	{
		header("location:../chat.php");
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