<section class="ncontent">
	<section class="linkTo"><a href="./index.php">Home</a> >> <a href="./news.php">News</a> >> News Board
	<hr class="hrz"/>
	</section>
<section class="news" >

<?php

	include "./service/newsService.php";

	$n=getLatestNewsId();
	if(!isset($_GET['nid'])||$_GET['nid']==0)
	{
		header("location:newsDetail.php?nid=".$n);
	}
	else
	{
		$isadmin=isAdmin();
		$r=getContent($_GET['nid']);
		if(!$r[0]) header("location:newsDetail.php?nid=".$n);
		$r[1]=str_replace("\r\n","<br/>",$r[1]);
		if($isadmin)
		{
			echo "<form method='post' action='./control/deleteNewsCtrl.php'>\n";
			echo "<input type='submit' class='sub' value='Delete' />\n";
			echo "<input type='text' name='nid' value='".$_GET['nid']."' readonly hidden />\n";
			echo "</form>\n";
		}
		echo "\t<section class='newsContentTitle'>".$r[0]."</section>\n";
		echo "\t<article class='newsContent'>\n";
		echo $r[1];
		echo "\t</article>\n</section>\n</section>\n";
	}

?>
</section>
