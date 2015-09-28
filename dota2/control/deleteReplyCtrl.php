<?php
session_start();

include_once "../include/DatabaseClass.php";
include "../service/chatService.php";

if(isset($_GET['cid']) && isset($_GET['ri']))
{
	deleteReply($_GET['cid'],$_GET['ri']);
	header("location:../chatDetail.php?cid=".$_GET['cid']."");
}

else
{
	header("Location: ../index.php");
}
?>