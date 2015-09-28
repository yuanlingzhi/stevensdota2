<section class="ccontent">
<section class="eventcreate">
	<form action="./control/eventCreateCtrl.php" onsubmit="return checkdateformat()" method="post">
		<section class="eventinput">
			<section class="eventinput1">Event type:</section>
			<section class="eventinput2"><select name="type" class="textfield" id="question"><option value="1">Rank game</option><option value="2">Normal game</option><option value="3">Against bots</option><option value="4">Test</option><option value="5">IH</option><option value="6">Hero solo</option><option value="7">Activity</option></select>
			</section>
		</section>
		<section class="eventinput">
			<section class="eventinput1">Max Limits:</section>
			<section class="eventinput2">
				<select name="limit" class="textfield" id="question">
<?php
$i=1;
while($i<11)
{
	echo "\t\t\t\t\t<option value='".$i."'>".$i."</option>\n";
	$i++;
}
	echo "\t\t\t\t\t<option value='11'>unlimit</option>\n";
?>
				</select>
			</section>
		</section>
		<section class="eventinput">
			<section class="eventinput1">Event name:</section>
			<section class="eventinput2"><input type="text" size='30' name="name" class="textfield" placeholder="less than 50 characters" required pattern=".{1,50}" title="The name should be 1 to 50 characters." /></section>
		</section>
		
		<section class="eventinput">
			<section class="eventinput1">Event location:</section>
			<section class="eventinput2"><input type="text" size="30" name="location" class="textfield" placeholder="less than 50 characters" required pattern=".{1,50}" title="The location name should be 1 to 50 characters." /></section>
		</section>
		
		<section class="eventinput">
			<section class="eventinput1">Event time:</section>
			<section class="eventinput2"><input type="date" id="eventDate1" name="date" placeholder="yyyy-mm-dd" class="textfield" required /><input type="time" id="eventDate2" placeholder="hh:mm"  name="time" class="textfield" required /></section>
		</section>
		
		<section class="eventtip"><aside class="tips">Event time should be within one week.</aside></section>

		<section>
			<section class="eventinput3"><input class="sub"  type="submit" value="Create"></section>
		</section>
	</form>
</section>
</section>