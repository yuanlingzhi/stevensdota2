<?php 
session_start();

if(!isset($_SESSION['pwflag2']))
{
	header("Location: ./findpwd.php");
}
if(isset($_SESSION['username']))
{
	$u=$_SESSION['username'];
}
else
{
	header("Location: ./findpwd.php");
}
?>

<section class="ccontent">
	<form action="./control/findPwdCtrl3.php" method="post">
		<section class="fpwd">
			<section class="text4">New password:</section>
			<section class="text5">
				<input type="password" name="newpass" class="textfield" size="28" 
					placeholder=" your new password" 
					required pattern="[a-zA-Z0-9_]{6,15}" title="invalid password" />
			</section>
			<section class="text4">Re-type:</section>
			<section class="text5">
				<input type="password" name="newcfm" class="textfield" size="28" 
					placeholder=" confirm your new password" 
					required pattern="[a-zA-Z0-9_]{6,15}" title="invalid password" />
			</section>
		</section>
		<section class="fpwd">
			<section class="next"><input type="submit" value="Submit" class="sub" /></section>
		</section>
	</form>
	<?php
		if(isset($_GET['info']))
		{			
			$info=$_GET['info'];
			$info=base64_decode($info);
			echo "<section class='infousr' id='fpusrchk'><br/><br/>$info</section>";
		}
		unset($_SESSION['pwflag2']);
	?>
</section>

