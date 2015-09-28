<?php
include_once "../domain/message.php";
include_once "../include/DatabaseClass.php";
function deleteMessageService($obj,$t)
{
	$db=new database();
	$sender=$obj->getFrom();
	$getter=$obj->getTo();
	$id=$obj->getId();
	$sender=addslashes($sender);
	$getter=addslashes($getter);
	
	$db->connect();
	if($t==0)
	{
		$sql="update inbox_message set sender_show=1 where inbox_id='$id'";
		$obj->setSender_show(1);
	}
	else{
		$sql="update inbox_message set getter_show=1 where inbox_id='$id'";
		$obj->setgetter_show(1);
	}
	$res=$db->send_sql($sql);
	$db->disconnect();
	return $obj;
}
?>