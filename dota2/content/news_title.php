<section class="ccontent">
	<section class="linkTo"><a href="./index.php">Home</a> >> News
	<hr class="hrz"/>
	</section>
	
	<table  border="0" cellpadding="5" cellspacing="0">
		<tr class="ttitle"><th class="titlewidth">Title</th><th class="postwidth">Post</th><th class="datewidth">Date</th></tr>
<?php

	include "./service/newsService.php";
	$totalpage=getTotalPage();
	if(isset($_POST['gopage']))
	{
		header("location:news.php?page=".$_POST['gopage']);
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
				header("location:news.php?page=1");
			$page=$_GET['page'];
		}
	}
	else	$page=1;
	$r = result($page);
	foreach ($r as $m)
	{
		if(strlen($m[1])>80) $m[1]=substr($m[1],0,70)."...";
		echo "\t\t<tr class='tableframe' ><td><a class='atitle' href='./newsDetail.php?nid=".$m[0]."'>".$m[1]."</a></td>\n";
		echo "\t\t\t<td class='tablepost'><a href='./otherprofile.php?otherUser=$m[2]'>".$m[2]."</a></td>\n";
		echo "\t\t\t<td class='tabledate'>".$m[3]."</td>\n";
		echo "\t\t</tr>\n";
	}
	echo "\t</table>\n";
	echo "\t<section class='page'>\n";
	echo "\t\t<form method='post' action=news.php class='gopage'>\n";
	echo "\t\t\t<input name='gopage' type='text' size='1' />\n";
	echo "\t\t\t<input type='submit' value='Go' />\n";
	echo "\t\t</form>";
	if($totalpage<6)
	{
		for($i=1;$i<=$totalpage;$i++)
		{
			if($i==$page)
				echo "\t\t<a href='news.php?page=".$i."' id='selected'>".$i."</a>\n ";
			else echo "\t\t<a href='news.php?page=".$i."'>".$i."</a>\n ";
		}
	}
	else
	{
		if($page<4)
		{
			for($i=1;$i<=4;$i++)
			{
				if($i==$page)
					echo "\t\t<a href='news.php?page=".$i."' id='selected'>".$i."</a>\n ";
				else echo "\t\t<a href='news.php?page=".$i."'>".$i."</a>\n ";
			}
			echo "...";
			echo "\t\t<a href='news.php?page=".$totalpage."'>".$totalpage."</a>\n ";
		}
		elseif($page>$totalpage-3)
		{
			echo "\t\t<a href='news.php?page=1'>1</a>\n ";
			echo "...";
			for($i=$totalpage-3;$i<=$totalpage;$i++)
			{
				if($i==$page)
					echo "\t\t<a href='news.php?page=".$i."' id='selected'>".$i."</a>\n ";
				else echo "\t\t<a href='news.php?page=".$i."'>".$i."</a>\n ";
			}
		}
		else
		{
			echo "\t\t<a href='news.php?page=1'>1</a>\n ";
			echo "...";
			for($i=$page-1;$i<=$page+1;$i++)
			{
				if($i==$page)
					echo "\t\t<a href='news.php?page=".$i."' id='selected'>".$i."</a>\n ";
				else echo "\t\t<a href='news.php?page=".$i."'>".$i."</a>\n ";
			}
			echo "...";
			echo "\t\t<a href='news.php?page=".$totalpage."'>".$totalpage."</a>\n ";
		}
	}
	echo "\t</section>\n";
	if(isAdmin())
	{
		echo "\t<form class='cpost' method='post' action='./control/addNewsCtrl.php' onsubmit='return checkNewsContent()'>\n";
		echo "\t\tTitle:<br/><input type='text' size='100%' name='title' required placeholder='less than 200 characters' pattern='.{1,200}' title='title should be 1 to 200 characters' /><br/>\n";
		echo "\t\tContent:<br/><textarea name='content' required rows='10' cols='100%' placeholder='news content here' ></textarea>\n";
		echo "<br/><input type='submit' class='sub' value='post'/>\n";
		echo "</form>";
	}
?>
	
</section>