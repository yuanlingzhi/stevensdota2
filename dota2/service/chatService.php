<?php

include_once "/include/DatabaseClass.php";

function isAdmin()
{
	if(isset($_SESSION['user']))
	{
		$u=addslashes($_SESSION['user']);
		$db=new database();
		$db->connect();
		$sql="select * from user where username='$u' and isadmin='1'";
		$res=$db->send_sql($sql);
		if($res->num_rows>0) $r=true;
		else $r=false;
		$db->disconnect();
		return $r;
	}
	return false;
}

function isAuthor($chat_id)
{

	if(isset($_SESSION['user']))
	{
		$u=addslashes($_SESSION['user']);
		$chat_id=addslashes($chat_id);
		$db=new database();
		$db->connect();
		$sql="select * from chat,user where chat_id='$chat_id' and username='$u' and chat.user_id=user.user_id";
		$res=$db->send_sql($sql);
		if($res->num_rows>0) $r=true;
		else $r=false;
		$db->disconnect();
		return $r;
	}
	return false;
}

function getLatestChatId()
{
	$db=new database();
	$db->connect();
	$sql="select chat_id from chat order by date desc limit 1";
	$res=$db->send_sql($sql);
	$r= $res->fetch_row();
	$db->disconnect();
	return $r[0];
}

function getReplyId($cid)
{
	$db=new database();
	$db->connect();
	$cid=addslashes($cid);
	$sql="select * from chat where chat_id='$cid'";
	$res=$db->send_sql($sql);
	if($res->num_rows==0)
	{
		$db->disconnect();
		return false;
	}
	$sql="select reply_id from chat_reply where chat_id='$cid' order by reply_id desc limit 1";
	$res=$db->send_sql($sql);
	$r= $res->fetch_row();
	$db->disconnect();
	return $r[0]+1;
}

function getTotalPage()
{
	$db=new database();
	$db->connect();
	$sql="select * from chat";
	$res=$db->send_sql($sql);
	if($res->num_rows%10==0) 
	{
		$t=$res->num_rows/10;
	}
	else 
	{
		$t= intval($res->num_rows/10)+1;
	}
	$db->disconnect();
	return $t;
}

function getReplyTotalPage($cid)
{
	$db=new database();
	$db->connect();
	$cid=addslashes($cid);
	$sql="select * from chat_reply where chat_id='$cid'";
	$res=$db->send_sql($sql);
	$rows=$res->num_rows+1;
	if($rows%10==0) 
	{
		$t=$rows/10;
	}
	else 
	{
		$t= intval($rows/10)+1;
	}
	$db->disconnect();
	return $t;
}

function result($page)
{
	$db=new database();
	$db->connect();
	$page=addslashes($page);
	$page=$page-1;
	$n=10*$page;
	$sql="select chat_id,theme,username,sum_reply,date,replydate from chat,user where chat.user_id=user.user_id order by replydate desc limit $n,10";
	$res=$db->send_sql($sql);
	$i=0;
	while($row[$i++]=$res->fetch_row())
	{}
	$db->disconnect();
	return $row;
}

function getContent1($cid)
{
	$db=new database();
	$db->connect();
	$cid=addslashes($cid);
	$sql="select theme, username, content, date, pic_loc from chat, user where chat_id='$cid' and user.user_id=chat.user_id";
	$res=$db->send_sql($sql);
	$row=$res->fetch_row();
	$db->disconnect();
	return $row;
}

function getContent2($cid,$page)
{
	$db=new database();
	$db->connect();
	$cid=addslashes($cid);
	$page=addslashes($page);
	$page=$page-1;
	$n=9*$page;
	$sql="select username,reply_id, content, date, pic_loc from chat_reply,user where chat_id='$cid' and user.user_id=chat_reply.user_id order by reply_id limit $n,9";	
	$res=$db->send_sql($sql);
	$i=0;
	while($row[$i++]=$res->fetch_row())
	{}
	$db->disconnect();
	return $row;
}

function deleteChat($cid)
{
	$db=new database();
	$db->connect();
	$cid=addslashes($cid);
	$sql="delete from chat where chat_id='$cid'";
	$res=$db->send_sql($sql);
	if($res) $r=true;
	else $r=false;
	$db->disconnect();
	return $r;
}

function deleteReply($cid,$ri)
{
	$db=new database();
	$db->connect();
	$cid=addslashes($cid);
	$ri=addslashes($ri);
	$u=addslashes($_SESSION['user']);
	if(!isAdmin())
	{
		$sql="select * from chat_reply,user where chat_id='$cid' and reply_id='$ri' and username='$u' and user.user_id=chat_reply.user_id";
		$res=$db->send_sql($sql);
		if(!$res)
		{
			$db->disconnect();
			return false;
		}
		if($res->num_rows==0)
		{
			$db->disconnect();
			return false;
		}
	}
	$sql="delete from chat_reply where chat_id='$cid' and reply_id='$ri'";
	$res=$db->send_sql($sql);
	if($res) $r=true;
	else $r=false;
	$db->disconnect();
	return $r;
}

function addChat($obj)
{
	$t=$obj->getTheme();
	$c=$obj->getContent();
	$u=$obj->getUser();
	$re=$obj->getReplies();
	$u=addslashes($u);
	$re=addslashes($re);
	if($t=="" || strlen($t)>50 || $c=="" || strlen($c)>1000) return -1;
	$db=new database();
	$db->connect();
	$sql="select user_id from user where username='$u'";
	$res=$db->send_sql($sql);
	$r=$res->fetch_row();
	$u=$r[0];
	$t= htmlspecialchars($t);
	$t=addslashes($t);
	$c= htmlspecialchars($c);
	$c=addslashes($c);
	$sql="insert into chat(theme,user_id,sum_reply,content) values('$t','$u','$re','$c')";
	$res=$db->send_sql($sql);
	if(!$res) $flag=0;
	else $flag=1;
	$db->disconnect();
	return $flag;

}

function replyChat($obj,$cid)
{
	$c=$obj->getContent();
	$u=$obj->getUser();
	$ri=$obj->getReplyId();
	if($ri==false)
	return -2;
	$ri=addslashes($ri);
	$u=addslashes($u);
	$cid=addslashes($cid);
	if($c=="" || strlen($c)>1000) return -1;
	$db=new database();
	$db->connect();
	$sql="select user_id from user where username='$u'";
	$res=$db->send_sql($sql);
	$r=$res->fetch_row();
	$u=$r[0];
	$c= htmlspecialchars($c);
	$c=addslashes($c);
	$sql="insert into chat_reply(chat_id,reply_id,content,user_id) values('$cid','$ri','$c','$u')";
	$res=$db->send_sql($sql);
	if(!$res) $flag=0;
	else $flag=1;
	$db->disconnect();
	return $flag;
	
}
?>