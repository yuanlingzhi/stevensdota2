<?php
session_start();
include_once "../domain/message.php";
include_once "../service/sendMessageService.php";
include_once "../service/getAllMessageService.php";
	if(isset($_POST['sendTo'])&&isset($_POST['content'])&&isset($_SESSION['user'])&&isset($_GET['type']))
	{
		$type=$_GET["type"];
		$to=$_POST['sendTo'];
		$from=$_SESSION['user'];
		$content=$_POST['content'];
		$check=preg_split("/\s/",$content);
		foreach ($check as $m)
		{
			if (strlen($m)>50) 
			{
				header("Location: ../inbox.php");
				exit();
			}
		}
		$obj=new message($from, $to, $content,0);
		date_default_timezone_set("America/New_York");
		$obj->setDate(date("Y-m-d H:i:s"));
		$obj->setId(getMaxInboxId());
		$flag=sendMessage($obj);
		$obj->setContent(htmlspecialchars($content));
		if($flag==-2)   //getter doesn't exist;
		{
			header("Location: ../inbox.php?info=n2");
		}
		else if($flag==1) //succeed
		{
			//reset session
			if(isset($_SESSION['message']))
			{
				$temp=unserialize($_SESSION['message']);//0 sender  1 getter
				$index=count($temp[0]);
				$temp[0][$index]=$obj;
				uasort($temp[0],"mysort");
				$temp=serialize($temp);
				$_SESSION['message']=$temp;
			}	
			if($type==1)
				header("Location: ../inbox.php?type=sent");
			else
				header("Location: ../inbox.php?type=inbox");
		}
		else{                  //
			header("Location: ../index.php");
		}
	}
	else
	{
		header("Location:../index.php");
	}


?>