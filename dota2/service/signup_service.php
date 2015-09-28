<?php
include_once '../domain/signupClass.php';
include_once '../include/DatabaseClass.php';
include_once 'RegExp_Judge.php';
	
	function judge_signup($obj)
	{
		$u=$obj->getUsername();
		$s=$obj->getSecurityId();
		$p=$obj->getPassword();
		$e=$obj->getEmail();
		$a=$obj->getAnswer();
		$c=$obj->getConfirm();
		$dbobj=new database();
		$u=addslashes($u);
		$s=addslashes($s);
		$p=addslashes($p);
		$e=addslashes($e);
		$a=addslashes($a);
		$c=addslashes($c);
		
		if(!preg_match("/^[1-7]$/",$s ))
		{
			return -1;
		}
		
		
		//regularexpression
		$flag=verifySignUp($obj);

		if($flag!=1)
		{
			return -1;
		}
		
		
		$dbobj->connect();
		//check if it is existed
		$sql="select * from user where username='$u' or email='$e'";
		$res=$dbobj->send_sql($sql);
		
		
		if($res->num_rows>0)
		{
			$dbobj->disconnect();
			return -1;
		}
		$sql="insert into user(username,email,password,question_id,answer)
				values('$u','$e',sha1('$p'),'$s','$a')
				";
		
		$res1=$dbobj->send_sql($sql);
		//create a user folder to store his pic
		$path="../usr/".$u;
		if(!mkdir($path))
		{
			$dbobj->disconnect();
			return -1;
		}
		
		$text="<?php header('Location: ../../index.php');?>";
		$filename="../usr/$u/index.php";
		$fp=fopen($filename, "w");
		fwrite($fp, $text);
		fclose($fp);
				
		$dbobj->disconnect();
		return 1;


	}
?>