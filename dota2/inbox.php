<?php session_start(); 
?>
<html lang="en-us">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<title>Stevens Dota2 Group Community - Message Inbox</title>
		<link rel="shortcut icon" href="./img/icons/Dota2_ico.png" type="images/x-icon"/>
		<link href="./css/yinbox.css" rel="stylesheet" />
		<link href="./css/cheader.css" rel="stylesheet" />
		<link href="./css/common.css" rel="stylesheet" />
		<link href="./css/cfooter.css" rel="stylesheet" />
		<script language="javascript" src="./js/jquery.js"></script>
		<script language="javascript" src="./js/ylz1.js"></script>
		<script language="javascript" src="./js/cg.js"></script>
		<script language="javascript" src="./ajax/inbox.js"></script>

	</head>

	 <body class="mainbody" background="./img/bg/mainbg.jpg"> 
<?php
if(!isset($_SESSION['user']))
{
	header("Location: index.php");
}

include "./include/userhead.php";
include "./content/inboxcontent.php";
include "./include/footer.php";
?>
	
	</body>

</html>