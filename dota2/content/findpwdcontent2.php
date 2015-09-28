<?php 
session_start();

if(!isset($_SESSION['pwflag1']))
{
	header("Location: ./findpwd.php");
}
if(isset($_SESSION['question']) && isset($_SESSION['username']))
{
	$qst=$_SESSION['question'];
}
else
{
	header("Location: ./findpwd.php");
}
?>

<section class="ccontent">
	<form action="./control/findPwdCtrl2.php" method="post">
		<section class="fpwd">
			<section class="qst">Question: <?php echo $qst; ?></section>
			<section class="text3">Answer:</section>
			<section class="text2">
				<input type="text" name="answ" class="textfield" size="28" 
					placeholder=" your answer" 
					required pattern="[a-zA-Z0-9]{1,100}" title="invalid answer" />
			</section>
		</section>
		<section class="fpwd">
			<section class="next"><input type="submit" value="Verify" class="sub" /></section>
		</section>
	</form>
	<?php
		if(isset($_GET['info']))
		{			
			$info=$_GET['info'];
			$info=base64_decode($info);
			echo "<section class='infousr' id='fpusrchk'>$info</section>";
		}
		unset($_SESSION['pwflag1']);
	?>
</section>