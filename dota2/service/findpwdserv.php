<?php
include_once '../include/DatabaseClass.php';
include_once "RegExp_Judge.php";

function judge_fpusr($u)
{
	$u=addslashes($u);
	$db=new database();
	
	//regularexpression
	$flag=verifyfpusrname($u);
	
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
		$sql1="select question_id from user where username='$u'";
		$res1=$db->send_sql($sql1);
		$row=$db->next_row();
		$db->disconnect();
		return $row['question_id'];
	}
	
	//otherwise, username not exists in database
	$db->disconnect();
	return 0;

}