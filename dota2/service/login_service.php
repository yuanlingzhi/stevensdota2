<?php
include_once '../include/DatabaseClass.php';
include_once "RegExp_Judge.php";

function judge_login($u, $p)
{
	$u=addslashes($u);
	$p=addslashes($p);
	$db=new database();
	
	//regularexpression
	$flag=verifyLogIn($u, $p);

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
		$sql1="select password from user where username='$u'";
		$res1=$db->send_sql($sql1);
		$row=$db->next_row();
		if($row['password']===sha1($p))	//password match
		{
			$db->disconnect();
			return 1;
		}
	}
	
	//otherwise, username not exists in database	
	$db->disconnect();
	return 0;
}
?>