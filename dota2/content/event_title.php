<section class="ccontent">
	<section class="linkTo"><a href="./index.php">Home</a> >> Event
	<hr class="hrz"/>
	</section>
	<table  border="0" cellpadding="5" cellspacing="0">
		<tr class="ttitle"><th class="titlewidth">Title</th><th class="postwidth">Post</th><th class="datewidth">Date</th></tr>

<?php
	include "./service/eventService.php";
	$totalpage=getTotalPage();
	if(isset($_POST['gopage']))
	{
		header("location:event.php?page=".$_POST['gopage']);
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
				header("location:event.php?page=1");
			$page=$_GET['page'];
		}
	}
	else	$page=1;
	if(isset($_GET['type']))
	$r = resultInType($_GET['type'],$page);
	else
	$r = result($page);
	foreach ($r as $m)
	{
		if(!$m) continue;
		if(strlen($m[2])>80) $m[2]=substr($m[2],0,70)."...";
		$type=getTypeName($m[1]);
		echo "\t\t<tr class='tableframe' ><td><a href='event.php?type=".$m[1]."' >[".$type."]</a><a class='atitle' href='./eventDetail.php?eid=".$m[0]."'>".$m[2]."</a></td>\n";
		echo "\t\t\t<td class='tablepost'><a href='./otherprofile.php?otherUser=$m[4]'>".$m[4]."</a></td>\n";
		echo "\t\t\t<td class='tabledate'>".$m[5]."</td>\n";
		echo "\t\t</tr>\n";
	}
	echo "\t</table>\n";
	echo "\t<section class='page'>\n";
	echo "\t\t<form method='post' action='event.php' class='gopage'>\n";
	echo "\t\t\t<input name='gopage' type='text' size='1' />\n";
	echo "\t\t\t<input type='submit' value='Go' />\n";
	echo "\t\t</form>";
	if($totalpage<6)
	{
		for($i=1;$i<=$totalpage;$i++)
		{
			if($i==$page)
				echo "\t\t<a href='event.php?page=".$i."' id='selected'>".$i."</a>\n ";
			else echo "\t\t<a href='event.php?page=".$i."'>".$i."</a>\n ";
		}
	}
	else
	{
		if($page<4)
		{
			for($i=1;$i<=4;$i++)
			{
				if($i==$page)
					echo "\t\t<a href='event.php?page=".$i."' id='selected'>".$i."</a>\n ";
				else echo "\t\t<a href='event.php?page=".$i."'>".$i."</a>\n ";
			}
			echo "...";
			echo "\t\t<a href='event.php?page=".$totalpage."'>".$totalpage."</a>\n ";
		}
		elseif($page>$totalpage-3)
		{
			echo "\t\t<a href='event.php?page=1'>1</a>\n ";
			echo "...";
			for($i=$totalpage-3;$i<=$totalpage;$i++)
			{
				if($i==$page)
					echo "\t\t<a href='event.php?page=".$i."' id='selected'>".$i."</a>\n ";
				else echo "\t\t<a href='event.php?page=".$i."'>".$i."</a>\n ";
			}
		}
		else
		{
			echo "\t\t<a href='event.php?page=1'>1</a>\n ";
			echo "...";
			for($i=$page-1;$i<=$page+1;$i++)
			{
				if($i==$page)
					echo "\t\t<a href='event.php?page=".$i."' id='selected'>".$i."</a>\n ";
				else echo "\t\t<a href='event.php?page=".$i."'>".$i."</a>\n ";
			}
			echo "...";
			echo "\t\t<a href='event.php?page=".$totalpage."'>".$totalpage."</a>\n ";
		}
	}

?>
	</section><br/><br/>
	<section class="create">
		<hr />
		<a href="./eventcreate.php">Create an Event</a>
	</section>
</section>


