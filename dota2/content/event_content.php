<section class="ccontent">
	<section class="linkTo"><a href="./index.php">Home</a> >> <a href="./event.php">Event</a> >> Event Board
	<hr class="hrz"/>
	</section>
<section class="eventdetail">
<?php

	include "./service/eventService.php";

	$n=getLatestEventId();
	if(!isset($_GET['eid'])||$_GET['eid']==0)
	{
		header("location:eventDetail.php?eid=".$n);
	}
	else
	{
		$r=getContent($_GET['eid']);
		if(!$r[0]) header("location:eventDetail.php?cid=".$n);
		$r2=getParti($_GET['eid']);
		if(isAdmin() || isAuthor($_GET['eid']))
		{
			echo "<form class='del' method='post' action='./control/deleteEventCtrl.php'>\n";
			echo "<input type='submit' class='sub' value='Delete' />\n";
			echo "<input type='text' name='eid' value='".$_GET['eid']."' readonly hidden />\n";
			echo "</form>\n";
		}
		$typename=getFullTypeName($r[0]);
		$PNum=getPNum($_GET['eid']);
	}
	

?>
	<p>Event owner: <?php echo $r[4] ?></p>
	<p>Event type: <?php echo $typename ?></p>
	<p>Event name: <?php echo $r[1] ?></p>
	<p>Event time: <?php echo $r[2] ?></p>
	<p>Event location: <?php echo $r[5] ?></p>
	<p>Numbers Enrolled/Maximum Limits: <span id="roomAvailable"><?php 
	if ($r[3]==11)
		echo  $PNum."/unlimit";
	else
		echo $PNum."/".$r[3] ?></span></p>
	<p id="par">Participants: <?php
	$i=1;
	$cnt=count($r2)-1;
	foreach ($r2 as $m)
	{
		if(!$m) continue;
		if($i==$cnt)
		echo "<a href='./otherprofile.php?otherUser=$m[0]'>".$m[0]."</a>";
		else echo "<a href='./otherprofile.php?otherUser=$m[0]'>".$m[0]."</a>,";
		$i++;
	}
?></p>
	<hr />
	<form id="joinOrQuit" method="post" action="./control/joinEventCtrl.php" onsubmit="return checkJoinOrQuit()">
		<input type="text" name="eid" value="<?php echo $_GET['eid'] ?>" hidden readonly />
<?php
	if(isParti($_GET['eid']))
		echo "<input type='submit' class='sub' value='Quit' onclick='quitEvent()'>";
	else
		echo "<input type='submit' class='sub' value='Join' onclick='joinEvent()'>";
?>
	</form>

</section>
</section>
