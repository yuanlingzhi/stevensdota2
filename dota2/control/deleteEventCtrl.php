<?php
session_start();

include_once "../include/DatabaseClass.php";
include "../service/eventService.php";

if(isset($_POST['eid']) && (isAdmin() || isAuthor($_POST['eid'])))
{
	deleteEvent($_POST['eid']);
	header("location:../event.php");
}

else
{
	header("Location: ../index.php");
}
?>