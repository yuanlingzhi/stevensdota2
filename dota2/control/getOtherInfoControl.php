<?php
session_start();
include "../service/profile_service.php";

		if(isset($_GET['otherUser']))
		{
			$name=$_GET['otherUser'];
			$flag=showProfile($name);
			if($flag!=-1)
			{
				//set session
				if($name==$_SESSION['user'])
				{
					header("Location: getuserinfoControl.php");
				}else
				{
					$flag=serialize($flag);
					$_SESSION['otherUserInfo']=$flag;
					header("Location: ../otherprofile.php?otherUser=$name");
				}
			}
			else                //username not exist
			{
				header("Location: ../index.php");
			}
		}
		else
		{
			header("Location: ../index.php");
		}

?>