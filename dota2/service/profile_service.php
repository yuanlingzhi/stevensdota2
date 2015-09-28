<?php
include_once "../domain/editusr.php";
include_once '../include/DatabaseClass.php';
include_once "../service/login_service.php";
include_once "../service/RegExp_Judge.php";
include_once "../service/uploadPic.php";
	function editProfile($obj,$file)
	{
		
		
		
		
		// judge if this obj's information is legal;  if they skip javascrip judgement
		//specially for password confirm;
		//return 1 is ok   0 is wrong password  else is cheat
		$username=$obj->getUsername();
		$newpawd=$obj->getNewpassword();
		$newpawdconfirm=$obj->getNewconfirm();
		$oldpawd=$obj->getOldpassword();
		$selfpic=$obj->getSelfpic();
		$selfdes=$obj->getSelfdescription();
		if(strlen($selfdes)>255) return -1;
		if($newpawd!=null)
		{
			if($newpawd!=$newpawdconfirm)
			{
				return -1;
			}
			if(!isPassword($newpawd))
			{
				return -1;
			}
			if(!isPassword($newpawdconfirm))
			{
				return -1;
			}
			if(!isPassword($oldpawd))
			{
				return -1;
			}
			$username=addslashes($username);
			$oldpawd=addslashes($oldpawd);
			$flag=judge_login($username, $oldpawd);
			if($flag!=1)
			{
				return 0;	
			}
		}
		
		//upload pic
		$f=uploadPic($file,$username);
		if($f==-1)                   //upload an invalid picture
		{
			return -2;
		}
		else if($f==2)
		{
			if($file['name']!=null||$file['name']!="")
			{
				$selfpic=null;
				return -2;
			}
		}
		
		$username=addslashes($username);
		$oldpawd=addslashes($oldpawd);
		$newpawd=addslashes($newpawd);
		$newpawdconfirm=addslashes($newpawdconfirm);

		$selfpic=addslashes($selfpic);
		
		$selfdes=addslashes($selfdes);
		$selfdes=htmlspecialchars($selfdes);
		
		
		$sql="";
		
		
		$dbobj=new database();
		if($newpawd!=null)
		{
			if($selfpic!=null)
			{
				$sql="update user set
				password=sha1('$newpawd'), self_des='$selfdes', pic_loc='$selfpic' where username='$username' ";
			}
			else
			{
				$sql="update user set 
				password=sha1('$newpawd'), self_des='$selfdes' where username='$username' ";
			}
		} 
		else
		{
			if($selfpic!=null)
			{
				$sql="update user set  self_des='$selfdes', pic_loc='$selfpic'  where username='$username' ";
			}
			else
			{
				$sql="update user set  self_des='$selfdes'  where username='$username' ";
			}
		}
		
		$dbobj->connect();
		$dbobj->send_sql($sql);
		$dbobj->disconnect();
		return 1;
		
		
	}
	function showProfile($uname)
	{
		$u=addslashes($uname);
		$dbobj=new database();
		$dbobj->connect();
		$sql="select * from user where username='$u'";
		$res=$dbobj->send_sql($sql);
		$obj=new editusr(null, null, null, null, null, null,null);
		if($res==null)
		{
			$dbobj->disconnect();
			return -1;
		}
		$row=$dbobj->next_row();
		$obj->setUsername($u);
		$obj->setEmail($row['email']);
		$obj->setSelfdescription($row['self_des']);
		$obj->setSelfpic($row['pic_loc']);
		$dbobj->disconnect();
		return $obj;
	}

?>