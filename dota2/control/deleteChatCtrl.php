<?php
session_start();

include_once "../include/DatabaseClass.php";
include "../service/chatService.php";

if(isset($_POST['cid']) && (isAdmin() || isAuthor($_POST['cid'])))
{
	deleteChat($_POST['cid']);
	header("location:../chat.php");
}

else
{
	header("Location: ../index.php");
}
?>