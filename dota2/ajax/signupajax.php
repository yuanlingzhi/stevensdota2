<?php

include_once '../include/DatabaseClass.php';

$db = new database();
$db->connect();
if(isset($_GET['username']))
{
	$u=$_GET['username'];
	$u=addslashes($u);
	$sql="select * from user where username='$u'";
	$res=$db->send_sql($sql);
	if($res->num_rows>0)
		echo "username exists";
	else echo "";
}
elseif(isset($_GET['email']))
{
	$e=$_GET['email'];
	$e=addslashes($e);
	$sql="select * from user where email='$e'";
	$res=$db->send_sql($sql);
	if($res->num_rows>0)
		echo "email exists";
	else echo "";
}

$db->disconnect();

?>