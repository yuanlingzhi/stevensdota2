<section class="scontent">

<?php

	include "./domain/searchClass.php";
	if(!isset($_SESSION['searchResult']))
	{
		if(isset($_GET['key']))
		{
			$key=$_GET['key'];
			header("location:./control/searchControl.php?searchKey=$key");
		}
		else header("location:./index.php");
	}
	else
		$obj=unserialize($_SESSION['searchResult']);
	unset($_SESSION['searchResult']);
	$i=0;
	if(!$obj)
		echo "<section class='noresult'>No Result! :`(</section>";
	else
	{
		$sectionid=1;
		$count=0;
		foreach($obj as $k=>$m)
		{
			$count=$count+count($m);
		}
		echo "\t<section class='showresult'>Total Results: ".$count."</section><br/><br/>\n";
		$mod=5-$count%5;
		if($mod==0)
			$page=intval($count/5);
		else $page=intval($count/5)+1;
		echo "\t<section class='searchres' id='section$sectionid'>\n\t<ul>\n";
		foreach($obj as $k=>$m)
		{
			if($k==3)
			foreach($m as $g)
			{
				$i++;
				$n=$g->getReplyn()+1;
				$content=$g->getContent();
				$url=$g->getUrl();
				$name=$g->getName();
				echo "\t\t<li class='resultlist'><a href='./$url'>[chat]$name</a></li>\n";
				echo "\t\t<ul class='resultlist'>\n\t\t\t<li>#$n:$content</li>\n\t\t</ul><br/>\n";
				if($i%5==0 && $i!=$count)
				{
					$s=$sectionid;
					$sectionid++;
					if($i==5)
						echo "\t</ul>\n\t\t<input class='sub' type='button' onclick='nextPage(document.getElementById(\"section$s\"))' value='Next' /><br/>\n Page: $s\n\t</section>\n\t<section class='searchres' id='section$sectionid' hidden>\n\t<ul>\n";
					else echo "\t</ul>\n\t\t<input class='sub' type='button' onclick='prevPage(document.getElementById(\"section$s\"))' value='Prev' />\n\t\t<input class='sub' type='button' onclick='nextPage(document.getElementById(\"section$s\"))' value='Next' /><br/>\n Page: $s\n\t</section>\n\t<section class='searchres' id='section$sectionid' hidden>\n\t<ul>\n";
				}
			}
			else
			foreach($m as $g)
			{
				$i++;
				$url=$g->getUrl();
				$name=$g->getName();
				if($k==0) $name="[user]".$name;
				if($k==1) $name="[news]".$name;
				if($k==2) $name="[event]".$name;
				echo "\t\t<li class='resultlist'><a href='./$url'>$name</a></li><br/>\n";
				if($i%5==0 && $i!=$count)
				{
					$s=$sectionid;
					$sectionid++;
					if($i==5)
						echo "\t</ul>\n\t\t<input class='sub' type='button' onclick='nextPage(document.getElementById(\"section$s\"))' value='Next' /><br/>\n Page: $s\n\t</section>\n\t<section class='searchres' id='section$sectionid' hidden>\n\t<ul>\n";
					else echo "\t</ul>\n\t\t<input class='sub' type='button' onclick='prevPage(document.getElementById(\"section$s\"))' value='Prev' />\n\t\t<input class='sub' type='button' onclick='nextPage(document.getElementById(\"section$s\"))' value='Next' /><br/>\n Page: $s\n\t</section>\n\t<section class='searchres' id='section$sectionid' hidden>\n\t<ul>";
				}
			}
		}
		if($mod!=5)
		while($mod--)
		echo "<br/>";
		$s=$sectionid;
		if($count>5)
		echo "\n\t</ul>\n\t\t<input class='sub' type='button' onclick='prevPage(document.getElementById(\"section$s\"))' value='Prev' /><br/>\n Page: $s\n\t</section>\n\t</ul>\n";
		else
		echo "\t</ul><br/>\n Page: $s\n\t</section>\n";
	}

?>
</section>
