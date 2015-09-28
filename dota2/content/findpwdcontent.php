<section class="ccontent">
	<form action="./control/findPwdCtrl.php" method="post">
		<section class="fpwd">
			<section class="text1">Username:</section>
			<section class="text2">
				<input type="text" name="username" class="textfield" size="28" 
					placeholder=" input username to find password" 
					required pattern="[a-zA-Z0-9_]{3,15}" title="invalid username" />
			</section>
		</section>
		<section class="fpwd">
			<section class="next"><input type="submit" value="Next" class="sub" /></section>
		</section>
	</form>
	<?php
		if(isset($_GET['info']))
		{			
			$info=$_GET['info'];
			$info=base64_decode($info);
			echo "<section class='infousr' id='fpusrchk'>$info</section>";
		}
	?>
</section>