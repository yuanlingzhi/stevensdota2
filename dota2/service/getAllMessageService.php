<?php
include_once "../include/DatabaseClass.php";
include_once "../domain/message.php";
function getAllMessageService($n)
{
	$all=array();
	$n=addslashes($n);
	$heissender=array();
	$heisgetter=array();
	$db=new database();
	$db->connect();
	$sql1="select inbox_id,u2.username as getter,content,date,isRead,sender_show,getter_show
		   from inbox_message as i, user as u1, user as u2 where u2.user_id=i.getter and  u1.user_id=i.sender and  u1.username='$n'";
	$res=$db->send_sql($sql1);
	$index=0;
	if(!$res)
	{
		$db->disconnect();
		return -1;
	}
	while(($row=$res->fetch_assoc())!=false)
	{
		$obj=new message($n, $row['getter'], $row['content'], $row['isRead']);
		$obj->setDate($row['date']);
		$obj->setIsRead($row['isRead']);
		$obj->setId($row['inbox_id']); 
		$obj->setGetter_show($row['getter_show']);
		$obj->setSender_show($row['sender_show']);
		$heissender[$index++]=$obj;
	}
	$index=0;
	
	
	$sql1="select inbox_id,u2.username as sender,content,date,isRead,sender_show,getter_show
		   from inbox_message as i, user as u1, user as u2 where u1.user_id=i.getter and  u2.user_id=i.sender and  u1.username='$n'";
	$res=$db->send_sql($sql1);
	if(!$res)
	{
		$db->disconnect();
		return -1;
	}
	while(($row=$res->fetch_assoc())!=false)
	{
		$obj=new message($row['sender'], $n, $row['content'], $row['isRead']);
		$obj->setDate($row['date']);
		$obj->setIsRead($row['isRead']);
		$obj->setId($row['inbox_id']);
		$obj->setGetter_show($row['getter_show']);
		$obj->setSender_show($row['sender_show']);
		$heisgetter[$index++]=$obj;
	}
	
	uasort($heisgetter, "mysort");
	uasort($heissender, "mysort");
	$all[0]=$heissender;
	$all[1]=$heisgetter;
	$db->disconnect();
	
	return $all;
}

function mysort($obj1,$obj2)
{
	date_default_timezone_set("America/New_York");
	$t1=strtotime($obj1->getDate());
	$t2=strtotime($obj2->getDate());
	if($t1==$t2)
		return 0;
	else if($t1>$t2)
		return -1;
	else
		return 1;
}

?>