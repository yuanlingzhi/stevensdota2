<?php
include_once '../include/DatabaseClass.php';
include_once "RegExp_Judge.php";

function judge_fpans($u, $a)
{	
	$u=addslashes($u);
	$a=addslashes($a);
	$db=new database();
	
	//regularexpression
	$flag=verifyfpans($a);
	
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
		$sql1="select answer from user where username='$u'";
		$res1=$db->send_sql($sql1);
		$row=$db->next_row();
		if($a===$row['answer'])
			return 1;
	}
	
	//otherwise, username not exists in database
	$db->disconnect();
	return 0;
}