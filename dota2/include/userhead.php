<header id="cheader">
	<section class="logoimg">
	<img src="./img/icons/dota2_logo.png" width="200" height="75">
	</section>
	<section class="clogin">
		<section class="headerright" >
		<?php
			include_once "service/readMessageService.php";
			if(isset($_SESSION['user']))
			{	
				$username=$_SESSION['user'];
				$sum=unReadSum($username);
			} 
			else
			{
				header("Location: ./index.php");
			}
		?>
		<a class="userinfo" href="./control/getuserinfoControl.php"><?php echo $username;?></a><br/>
		<a class="userinfo" href="./control/getAllMessagesControl.php">Inbox<?php if($sum!=0) echo "(".$sum.")";?></a>
		<a class="userinfo" href="./control/logout.php">Log out</a>
		
		</section>
		<form action="./control/searchControl.php" method="post" class="srch">
			<input class="csearchtext" name="searchKey" type="text" size="15" placeholder=" search" required title="Input a valid key word" />
			<input class="csearch" type="submit" value=""/>
		</form>
	</section>
	<nav class="cnav">
		<a href="./index.php">Home</a>
		<a href="./news.php">News</a>
		<a href="./chat.php">Chat</a>
		<a href="./event.php">Event</a>
		<a href="./hero.php">Hero</a>
	</nav>
</header>
<section class="cblank"></section>
