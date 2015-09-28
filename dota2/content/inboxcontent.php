<?php	
include_once 'domain/message.php';
include_once "service/readMessageService.php";
	if(isset($_GET['info']))
	{
		if($_GET['info']=="n2")
		{
			echo "<script language='javascript'>alert('please input a valid user.');</script>";
		}
	}
	if(isset($_SESSION['user'])&&!isset($_SESSION['message']))
	{
		header("Location: ./control/getAllMessagesControl.php");
	}
	else if(!isset($_SESSION['user']))
	{
		header("Location: ./index.php");
	}
	$obj=array();
	$in=1;
	$key=0;
	$type="FROM&nbsp;&nbsp;";
	if(isset($_SESSION['user'])&&isset($_SESSION['message']))
	{
		
		$obj=$_SESSION['message'];    //0 sender  1 getter
		$obj=unserialize($obj);
		if(isset($_GET['action']))
		{
			if(($_GET['action']==0||$_GET['action']==1)&&is_numeric($_GET['action']))
			{
				$in=$_GET['action'];
			}	
			if($in==1)
				$type="FROM&nbsp;&nbsp;";
			else
				$type="TO&nbsp;&nbsp;";
		}
		if(isset($_GET['whichOne']))
		{
			if($_GET['whichOne']<count($obj[$in])&&$_GET['whichOne']>=0&&is_numeric($_GET['whichOne']))
			{
				$key=$_GET['whichOne'];
			}
			if(isset($obj[$in][$key]))
			{
				if(preJudge($obj[$in][$key]))
				{
					$obj[$in][$key]->setIsRead(1);
					readIt($obj[$in][$key]->getId());
				
					$obj1=serialize($obj);
					$_SESSION['message']=$obj1;
				}
			}
		}
	}
?>



<section id="hidebg"></section>
<section id="hidebox">
<form onsubmit='return checkChatContent()' action="./control/sendMessageControl.php?type=<?php echo $in;?>" method="post">
	<section class="messageTitle"><label>message box:</label></section>
	&nbsp;&nbsp;send to: <input type="text" id="sendToUser" onKeyUp="findUser()" onblur="hideUser()" class="textfield" value="" title="sent to" name="sendTo"/><br/><br/>
	&nbsp;&nbsp;content:<br/>&nbsp;&nbsp;<textarea  class="textfield"  cols="40" rows="5" name="content"></textarea><br/>
	&nbsp;&nbsp;<input class="sub" type="submit" value="submit"/><input class="sub" type="button" value="cancel" onClick="hide()"/>
</form>
</section>

<section id="hideuserbg">
<li>&nbsp123</li>
</section>

<section class="yinbox">
	<section class="yinboxtitle">
	<form action="inbox.php?type=inbox" method="post">
		<section class="yinboxposition">
			<input class="button1" class="type" type="submit" value="inbox"/>
		</section>
	</form>
	<form action="inbox.php?type=sent" method="post">
		<section class="yinboxposition">
			<input class="button1" class="type" type="submit" value="sent" />
		</section>
	</form>
		<section class="yinboxposition">
			<input class="button1" class="type" type="button" value="compose" onClick="show();"/>
		</section>
	<form action="./control/deleteMessageControl.php" method="post">
		<section class="<?php if(isset($_GET['action']))
							     echo "deletepositionshow";
							  else 
							  	echo "deletepositionhide";				
		?>">
			<input class="button1" class="type" type="submit" value="delete"/>
			<input type="hidden" name="type" value="<?php echo $in?>" />
			<input type="hidden" name="index" value="<?php echo $key?>" />
		</section>
	</form>
	</section>
	
	<section class="yinboxleft">
	<?php 
	if(isset($_GET['type']))
	{
		if($_GET['type']=="sent")
		{
			$in=0;
			$type="TO&nbsp;&nbsp;";
		}else{
			$in=1;
			$type="FROM&nbsp;&nbsp;";
		}
	}
	if($in==1)
	{
		foreach ($obj[1] as$k=> $v)
		{
			if($v->getGetter_show()==0)
			{
				
				echo "<span class='inboxtype' name='inboxtype'>$type</span>";
				echo "<section class='inboxinfo'>";
				echo "<a href='inbox.php?action=$in&whichOne=$k'>";
				if($v->getIsRead()==1)
				{
					echo "<section class='inboxname'>".$v->getFrom()."</section>";
					echo "<section class='inboxdate'>".$v->getDate()."</section></a></section><br/><hr>";
				}else
				{
					echo "<section class='inboxname_unread'>".$v->getFrom()."</section>";
					echo "<section class='inboxdate_unread'>".$v->getDate()."</section></a></section><br/><hr>";	
				}
			}
		}
	}
	else if($in==0)
	{
		foreach ($obj[0] as$k=> $v)
		{
			if($v->getSender_show()==0)
			{
				echo "<span class='inboxtype' name='inboxtype'>$type</span>";
				echo "<section class='inboxinfo'>";
				echo "<a href='inbox.php?action=$in&whichOne=$k' >";
				echo "<section class='inboxname'>".$v->getTo()."</section>";
				echo "<section class='inboxdate'>".$v->getDate()."</section></a></section><br/><hr>";
			}
		}
	}
	?>

	
	</section>
	
	<section class="yinboxright">
		<section class="yinboxcontent">
			<?php 
				
				if(isset($_GET['whichOne'])&&isset($_GET['action']))
				{
					$action=0;
					$index=0;
					if(($_GET['action']==0||$_GET['action']==1)&&is_numeric($_GET['action']))
					{
						$action=$_GET['action'];
					}
					if($_GET['whichOne']<count($obj[$action])&&$_GET['whichOne']>=0&&is_numeric($_GET['whichOne']))
					{
						$index=$_GET['whichOne'];
					}
					if($obj!=null)
					{
						if(isset($obj[$action][$index]))
						{
							if(!ifIsdelete($obj[$action][$index],$action))
							{
								$temp=$obj[$action][$index];
								if($action==0)
								{
									$to=$temp->getTo();
									echo "<h1> To <a href='otherprofile.php?otherUser=$to'>$to</a></h1>";
									echo $temp->getContent();
								}
								else
								{
									$from=$temp->getFrom();
									echo "<h1> From <a href='otherprofile.php?otherUser=$from'>$from</a></h1>";
									echo $temp->getContent();
								}
									
							}
						}
					}
				}
			
			?>
		</section>
	</section>
</section>