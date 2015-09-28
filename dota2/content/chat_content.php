<section class="chatcontent">
	<section class="linkTo"><a href="./index.php">Home</a> >> <a href="./chat.php">Chat</a> >> Chat Board
	<hr class="hrz"/>
	</section>

<?php

	include "./service/chatService.php";

	$n=getLatestChatId();
	if(!isset($_GET['cid'])||$_GET['cid']==0)
	{
		header("location:chatDetail.php?cid=".$n);
	}
	else
	{
		$totalpage=getReplyTotalPage($_GET['cid']);
		if(isset($_POST['gopage']))
		{
			header("location:chatDetail.php?cid=".$_GET['cid']."&page=".$_POST['gopage']);
		}
		if(isset($_GET['page']))
		{
			if($totalpage==0)
			{
				$page=1;
			}
			else
			{
				if($_GET['page']>$totalpage || $_GET['page']<=0)
					header("location:chatDetail.php?cid=".$_GET['cid']."&page=1");
				$page=$_GET['page'];
			}
		}
		else	$page=1;
		$r=getContent1($_GET['cid']);
		if(!$r[4]) $r[4]="./img/default.png";
		else $r[4]="./usr/".$r[1]."/".$r[4];
		if(!$r[0]) header("location:chatDetail.php?cid=".$n);
		$r2=getContent2($_GET['cid'],$page);
		$r[2]=str_replace("\r\n","<br/>",$r[2]);
		if(isAdmin() || isAuthor($_GET['cid']))
		{
			echo "<form class='del' method='post' action='./control/deleteChatCtrl.php'>\n";
			echo "<input type='submit' class='sub' value='Delete' />\n";
			echo "<input type='text' name='cid' value='".$_GET['cid']."' readonly hidden />\n";
			echo "</form>\n";
		}

		echo "\t<section class='cchatheader'>\n";
		echo "\t\t<section class='cchattheme'>".$r[0]."</section>\n";
		echo "\t</section>\n";
		echo "\t<table class='tableframe'  rules='all' border='0' cellpadding='5' cellspacing='0'>\n";
		echo "\t\t<tr><td class='cchatauthor'>#1<br/><a href='./otherprofile.php?otherUser=$r[1]'>".$r[1]."</a><br/><img height='140px' width='140px' src='".$r[4]."'></img></td>\n";
		echo "\t\t\t<td class='cchatcontent'>".$r[2]."</td>\n";
		echo "\t\t\t<td class='cchatdate'>".$r[3]."</td>\n";
		echo "\t\t</tr>\n";
		foreach ($r2 as $m)
		{
			if(!$m) continue;
			if(!$m[4]) $m[4]="./img/default.png";
			else $m[4]="./usr/".$m[0]."/".$m[4];
			$ri=$m[1];
			$m[1]=$m[1]+1;
			$m[2]=str_replace("\r\n","<br/>",$m[2]);
			if((isset($_SESSION['user']) && $m[0]==$_SESSION['user']) || isAdmin())
			echo "\t\t<tr><td class='cchatauthor'><a href='./control/deleteReplyCtrl.php?cid=".$_GET['cid']."&ri=".$ri."'>[del]</a><br/>#".$m[1]."<br/><a href='./otherprofile.php?otherUser=$m[0]'>".$m[0]."</a><br/><img height='140px' width='140px' src='".$m[4]."'></img></td>\n";
			else
			echo "\t\t<tr><td class='cchatauthor'>#".$m[1]."<br/><a href='./otherprofile.php?otherUser=$m[0]'>".$m[0]."</a><br/><img height='140px' width='140px' src='".$m[4]."'></img></td>\n";
			echo "\t\t\t<td class='cchatcontent'>".$m[2]."</td>\n";
			echo "\t\t\t<td class='cchatdate'>".$m[3]."</td>\n";
			echo "\t\t</tr>\n";
		}
		echo "\t</table>\n";
		echo "\t<section class='page'>\n";
		echo "\t\t<form method='post' action='chatDetail.php?cid=".$_GET['cid']."' class='gopage'>\n";
		echo "\t\t\t<input name='gopage' type='text' size='1' />\n";
		echo "\t\t\t<input type='submit' value='Go' />\n";
		echo "\t\t</form>";
		if($totalpage<6)
		{
			for($i=1;$i<=$totalpage;$i++)
			{
				if($i==$page)
					echo "\t\t<a href='chatDetail.php?cid=".$_GET['cid']."&page=".$i."' id='selected'>".$i."</a>\n ";
				else echo "\t\t<a href='chatDetail.php?cid=".$_GET['cid']."&page=".$i."'>".$i."</a>\n ";
			}
		}
		else
		{
			if($page<4)
			{
				for($i=1;$i<=4;$i++)
				{
					if($i==$page)
						echo "\t\t<a href='chatDetail.php?cid=".$_GET['cid']."&page=".$i."' id='selected'>".$i."</a>\n ";
						else echo "\t\t<a href='chatDetail.php?cid=".$_GET['cid']."&page=".$i."'>".$i."</a>\n ";
				}
				echo "...";
				echo "\t\t<a href='chatDetail.php?cid=".$_GET['cid']."&page=".$totalpage."'>".$totalpage."</a>\n ";
			}
			elseif($page>$totalpage-3)
			{
				echo "\t\t<a href='chatDetail.php?cid=".$_GET['cid']."&page=1'>1</a>\n ";
				echo "...";
				for($i=$totalpage-3;$i<=$totalpage;$i++)
				{
					if($i==$page)
						echo "\t\t<a href='chatDetail.php?cid=".$_GET['cid']."&page=".$i."' id='selected'>".$i."</a>\n ";
					else echo "\t\t<a href='chatDetail.php?cid=".$_GET['cid']."&page=".$i."'>".$i."</a>\n ";
				}
			}
			else
			{
				echo "\t\t<a href='chatDetail.php?cid=".$_GET['cid']."&page=1'>1</a>\n ";
				echo "...";
				for($i=$page-1;$i<=$page+1;$i++)
				{
					if($i==$page)
						echo "\t\t<a href='chatDetail.php?cid=".$_GET['cid']."&page=".$i."' id='selected'>".$i."</a>\n ";
					else echo "\t\t<a href='chatDetail.php?cid=".$_GET['cid']."&page=".$i."'>".$i."</a>\n ";
				}
				echo "...";
				echo "\t\t<a href='chatDetail.php?cid=".$_GET['cid']."&page=".$totalpage."'>".$totalpage."</a>\n ";
			}
		}
		echo "\t</section>\n";
		if(isset($_SESSION['user']))
		{
			echo "\t<form class='cpost' onsubmit='return checkChatContent()' action='./control/replyChatCtrl.php?cid=".$_GET['cid']."' method='post'>\n";
			echo "\t\tReply: <br/><textarea rows='10' cols='100%' placeholder='less than 1000 characters' name='content' required></textarea>\n";
			echo "\t\t<br/><input type='submit' class='sub' value='post'/>\n";
			echo "\t</form>\n";
		}
	}
?>

</section>