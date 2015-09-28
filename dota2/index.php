<?php session_start();
?>
<!DOCTYPE html>
<html lang="en-us">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<meta name="description" content="We are Super Dota2 Fans!!">
		<meta name="author" content="Gong Cheng, Lingzhi Yuan, Zhe Xu">
		<meta name="keywords" content="stevens dota2,dota2,dota,stevens,community">
		<title>Stevens Dota2 Group Community</title>
		<link rel="shortcut icon" href="./img/icons/Dota2_ico.png" type="images/x-icon"/>
		<link href="./css/Index_Content.css" rel="stylesheet" />
		<link href="./css/cheader.css" rel="stylesheet" />
		<link href="./css/common.css" rel="stylesheet" />
		<link href="./css/cfooter.css" rel="stylesheet" />
		<script language="javascript" src="./js/jquery.js"></script>
		<script language="javascript" src="./js/cg.js"></script>
	</head>

	 <body class="mainbody" background="./img/bg/mainbg.jpg"> 
<?php


	
if(isset($_SESSION['user']))
{
	include "./include/userhead.php";
}
else
{
	include "./include/header.php";
}


include "./content/indexcontent.php";
include "./include/footer.php";
?>
	
	</body>

</html>