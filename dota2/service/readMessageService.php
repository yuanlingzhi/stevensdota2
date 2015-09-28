<?php
include_once "./include/DatabaseClass.php";
		function readIt($id)
		{
			$db=new database();
			$db->connect();
			$sql="update inbox_message set isRead=1 where inbox_id=$id";
			$db->send_sql($sql);
			$db->disconnect();
		}
		function unReadSum($username)
		{
			$db=new database();
			$db->connect();
			$sql="select count(inbox_id) as num from inbox_message as i, user as u where i.getter=u.user_id
				  and u.username='$username' and isRead=0";
			$res=$db->send_sql($sql);
			$row=$res->fetch_assoc();
			$db->disconnect();
			return $row['num'];
		}
		function preJudge($obj)
		{
			if(isset($_SESSION['user']))
			{
				$username=$_SESSION['user'];
				if($obj->getTo()==$username){
					return true;
				}
				else
					return false;
			}
		}
		function ifIsdelete($obj,$t)
		{
			if($t==0)
			{
				if($obj->getSender_show()==1)
					return true;
				else
					return false;
			}
			else
			{
				if($obj->getGetter_show()==1)
					return true;
				else
					return false;
			}
		}
?>