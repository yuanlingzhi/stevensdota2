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

function getLatestNewsId()
{
	$db=new database();
	$db->connect();
	$sql="select news_id from news order by date desc limit 1";
	$res=$db->send_sql($sql);
	$r= $res->fetch_row();
	return $r[0];
}

function getTotalPage()
{
	$db=new database();
	$db->connect();
	$sql="select * from news";
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

function result($page)
{
	$db=new database();
	$db->connect();
	$page=addslashes($page);
	$page=$page-1;
	$n=10*$page;
	$sql="select news_id,title,username,date from news,user where news.user_id=user.user_id order by date desc limit $n,10";
	$res=$db->send_sql($sql);
	$i=0;
	while($row[$i++]=$res->fetch_row())
	{}
	$db->disconnect();
	return $row;
}

function getContent($nid)
{
	$db=new database();
	$db->connect();
	$nid=addslashes($nid);
	$sql="select title, content from news where news_id='$nid'";
	$res=$db->send_sql($sql);
	$row=$res->fetch_row();
	$db->disconnect();
	return $row;
}

function deleteNews($nid)
{
	$db=new database();
	$db->connect();
	$nid=addslashes($nid);
	$sql="delete from news where news_id='$nid'";
	$res=$db->send_sql($sql);
	if($res) $r=true;
	else $r=false;
	$db->disconnect();
	return $r;
}

function addNews($obj)
{
	$t=$obj->getTitle();
	$c=$obj->getContent();
	$u=$obj->getUser();
	if($t=="" || strlen($t)>200 || $c=="") return -1;
	$db=new database();
	$db->connect();
	$u=addslashes($u);
	$sql="select user_id from user where username='$u'";
	$res=$db->send_sql($sql);
	$r=$res->fetch_row();
	$u=$r[0];
	$t= htmlspecialchars($t);
	$t=addslashes($t);
	$c= htmlspecialchars($c);
	$c=addslashes($c);
	$sql="insert into news(title,content,user_id) values('$t','$c','$u')";
	$res=$db->send_sql($sql);
	if($res) $flag=1;
	else $flag=0;
	$db->disconnect();
	return $flag;

}

?>