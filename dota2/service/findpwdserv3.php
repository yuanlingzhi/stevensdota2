<?php
include_once '../include/DatabaseClass.php';
include_once "RegExp_Judge.php";

function judge_fpnewpass($u, $p, $c)
{	
	$u=addslashes($u);
	$p=addslashes($p);
	$c=addslashes($c);
	$db=new database();
	
	//regularexpression: check if $p==$c
	$flag=verifyfppwd($p,$c);
	
	if($flag!=1)
	{
		return -1;
	}

	$db->connect();
	//check if it is existed
	$sql="select * from user where username='$u'";
	$res=$db->send_sql($sql);

	if($res->num_rows>0)	//username exists
	{
		$sql1="update user set password=sha1('$p') where username='$u'";
		$res1=$db->send_sql($sql1);
		$db->disconnect();
		return 1;
	}
	
	//otherwise, username not exists in database
	$db->disconnect();
	return 0;
}

function judge_ischeat($u, $q1, $a1)
{
	$u=addslashes($u);
	$q1=addslashes($q1);
	$a1=addslashes($a1);
	$db=new database();
	
	//regularexpression
	$flag=verifyfpischeat($u,$a1);
	if($flag!=1)
	{
		return -1;
	}

	$db->connect();
	//check if it is existed
	$sql="select * from user where username='$u' and answer='$a1'";
	$res=$db->send_sql($sql);

	if($res->num_rows>0)	//username matches answer
	{
		$db->disconnect();
		return 1;
	}
	
	//otherwise, username not exists in database
	$db->disconnect();
	return 0;
}