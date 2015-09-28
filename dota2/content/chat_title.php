<section class="ccontent">
	<section class="linkTo"><a href="./index.php">Home</a> >> Chat
	<hr class="hrz"/>
	</section>
	<table border="0" cellpadding="5" cellspacing="0">
		<tr class="ttitle"><th class="titlewidth">Theme</th><th class="postwidth">Author</th><th class="datewidth">Replies</th></tr>
<?php
	include "./service/chatService.php";
	$totalpage=getTotalPage();
	if(isset($_POST['gopage']))
	{
		header("location:chat.php?page=".$_POST['gopage']);
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
				header("location:chat.php?page=1");
			$page=$_GET['page'];
		}
	}
	else	$page=1;
	$r = result($page);
	foreach ($r as $m)
	{
		if(strlen($m[1])>80) $m[1]=substr($m[1],0,70)."...";
		echo "\t\t<tr class='tableframe' ><td><a class='atitle' href='./chatDetail.php?cid=".$m[0]."'>".$m[1]."</a></td>\n";
		echo "\t\t\t<td class='tablepost'><a href='./otherprofile.php?otherUser=$m[2]'>".$m[2]."</a></td>\n";
		echo "\t\t\t<td class='tabledate'>".$m[3]."</td>\n";
		echo "\t\t</tr>\n";
	}
	echo "\t</table>\n";
	echo "\t<section class='page'>\n";
	echo "\t\t<form method='post' action='chat.php' class='gopage'>\n";
	echo "\t\t\t<input name='gopage' type='text' size='1' />\n";
	echo "\t\t\t<input type='submit' value='Go' />\n";
	echo "\t\t</form>";
	if($totalpage<6)
	{
		for($i=1;$i<=$totalpage;$i++)
		{
			if($i==$page)
				echo "\t\t<a href='chat.php?page=".$i."' id='selected'>".$i."</a>\n ";
			else echo "\t\t<a href='chat.php?page=".$i."'>".$i."</a>\n ";
		}
	}
	else
	{
		if($page<4)
		{
			for($i=1;$i<=4;$i++)
			{
				if($i==$page)
					echo "\t\t<a href='chat.php?page=".$i."' id='selected'>".$i."</a>\n ";
				else echo "\t\t<a href='chat.php?page=".$i."'>".$i."</a>\n ";
			}
			echo "...";
			echo "\t\t<a href='chat.php?page=".$totalpage."'>".$totalpage."</a>\n ";
		}
		elseif($page>$totalpage-3)
		{
			echo "\t\t<a href='chat.php?page=1'>1</a>\n ";
			echo "...";
			for($i=$totalpage-3;$i<=$totalpage;$i++)
			{
				if($i==$page)
					echo "\t\t<a href='chat.php?page=".$i."' id='selected'>".$i."</a>\n ";
				else echo "\t\t<a href='chat.php?page=".$i."'>".$i."</a>\n ";
			}
		}
		else
		{
			echo "\t\t<a href='chat.php?page=1'>1</a>\n ";
			echo "...";
			for($i=$page-1;$i<=$page+1;$i++)
			{
				if($i==$page)
					echo "\t\t<a href='chat.php?page=".$i."' id='selected'>".$i."</a>\n ";
				else echo "\t\t<a href='chat.php?page=".$i."'>".$i."</a>\n ";
			}
			echo "...";
			echo "\t\t<a href='chat.php?page=".$totalpage."'>".$totalpage."</a>\n ";
		}
	}
	echo "\t</section>\n";
	if(isset($_SESSION['user']))
	{
		echo "\t<form class='cpost' method='post' action='./control/addChatCtrl.php' onsubmit='return checkChatContent()'>\n";
		echo "\t\tTheme:<br/><input type='text' size='100%' name='theme' required placeholder='less than 50 characters' pattern='.{1,50}' title='theme should be 1 to 50 characters' /><br/>\n";
		echo "\t\tContent:<br/><textarea name='content' required rows='10' cols='100%' placeholder='less than 1000 characters'></textarea>\n";
		echo "<br/><input type='submit' class='sub' value='post'/>\n";
	}
?>
	

</section>