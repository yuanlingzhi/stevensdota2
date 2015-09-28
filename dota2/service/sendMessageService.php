<?php

include_once "../domain/message.php";
include_once "../include/DatabaseClass.php";
	function sendMessage($obj)                
	{
		//check if getter exist in db

		$sender	= $obj->getFrom();
		$getter = $obj->getTo();
		$content= $obj->getContent();
		$sender=trim($sender);
		$getter=trim($getter);
		$getter=htmlspecialchars($getter);
		$getter=addslashes($getter);		
		$db=new database();
		$db->connect();
		$sql="select * from user where username='$getter'";
		$res=$db->send_sql($sql);
		
		if($res->num_rows<=0)	//getter doesn't exist
		{
			$db->disconnect();
			return -2;
		}
		
		$sender=addslashes($sender);
		$content=htmlspecialchars($content);
		$content=addslashes($content);
		
		$s1="select user_id from user where username='$sender'";
		$res=$db->send_sql($s1);
		$row=$res->fetch_assoc();
		$sender=$row['user_id'];
		
		$s1="select user_id from user where username='$getter'";
		$res=$db->send_sql($s1);
		$row=$res->fetch_assoc();
		$getter=$row['user_id'];
		
		
		$sql="insert into inbox_message(sender,getter,content,isRead) values('$sender','$getter','$content',0)";
		$res=$db->send_sql($sql);
		if($res)
		{
			$db->disconnect();
			return 1;
		}else {
			$db->disconnect();
			return -1;
		}
		
		
	}
	function getMaxInboxId()
	{
		$db=new database();
		$db->connect();
		$sql="select max(inbox_id) as m from inbox_message";
		$res=$db->send_sql($sql);
		$row=$res->fetch_assoc();
		$db->disconnect();
		return $row['m']; 
	}
?>