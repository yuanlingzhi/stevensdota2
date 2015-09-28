<?php session_start();
?>
<!DOCTYPE html>
<html lang="en-us">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<title>Stevens Dota2 Group Community - Hero Attributes</title>
		<link rel="shortcut icon" href="./img/icons/Dota2_ico.png" type="images/x-icon"/>
		<link href="./css/Index_Content.css" rel="stylesheet" />
		<link href="./css/cheader.css" rel="stylesheet" />
		<link href="./css/common.css" rel="stylesheet" />
		<link href="./css/cfooter.css" rel="stylesheet" />
		<link href="./css/chero.css" rel="stylesheet" />
		<script language="javascript" src="./js/jquery.js"></script>
		<script language="javascript" src="./js/cg.js"></script>
		<script language="javascript" src="./js/changehero.js"></script>
	</head>

	<body background="./img/bg/bg2.1.jpg" style="margin:auto;background-size: 100% 100%; background-attachment: fixed">
<?php
if(isset($_SESSION['user']))
{
	include "./include/userhead.php";
}
else
{
	include "./include/header.php";
}
include "./content/herocontent.php";
include "./include/footer.php";
?>
	
	</body>

</html>