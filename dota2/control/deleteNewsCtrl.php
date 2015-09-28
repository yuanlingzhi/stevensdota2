<?php
session_start();

include_once "../include/DatabaseClass.php";
include "../service/newsService.php";

if(isAdmin() && isset($_POST['nid']))
{
	deleteNews($_POST['nid']);
	header("location:../news.php");
}

else
{
	header("Location: ../index.php");
}
?>