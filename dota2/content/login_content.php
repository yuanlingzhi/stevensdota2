<section class="ccontent">
	<form action="./control/loginControl.php" method="post">
		<section class="login">	
			<section class="text1">Username:</section>
			<section class="text2"> <input type="text" name="username" class="textfield" placeholder="username" required pattern="[a-zA-Z0-9_]{3,15}" title="wrong username" /></section>
		</section>
		<section class="login">	
			<section class="text1">Password:</section>
			<section class="text2"> <input type="password" name="password" class="textfield" placeholder="password" required pattern="[a-zA-Z0-9]{6,20}" title="wrong password" /></section>
		</section>
		<section class="login">
			<section>
				<input type="submit" value="Submit" class="sub" />&nbsp&nbsp&nbsp<a href="./findpwd.php">Forget password?</a>
			</section>
		</section>
	</form>


	<?php 
		
		if(isset($_GET['info']))
		{			
			$info=$_GET['info'];
			$info=base64_decode($info);
			echo "<section class='check' id='logincheck'>$info</section>";
		}		
		
		?>
</section>