<?php 
include_once "./domain/editusr.php";
if(isset($_SESSION['userinfo']))
{
	$obj=$_SESSION['userinfo'];
	$obj=unserialize($obj);
}
else
{
	header("Location: ./login.php");
}
if(isset($_GET["infopawd"]))
{ echo "<script language='javascript'>alert('Wrong Password!');</script>"; }
if(isset($_GET["infopic"]))
{ echo "<script language='javascript'>alert('Please select valid picture');</script>"; }
?>
<section class="pcontent">
  <section class="profile">
  	<img id='img'  src=<?php 
		if($obj->getSelfpic()!=null)
		{
			$username=$obj->getUsername();
			$pic=$obj->getSelfpic();
			$path="./usr/$username/$pic";
			echo $path;
		}
		else 
		{
			echo "./img/default.png";
		}
	
	?> alt="default profile image" height="200" width="200">
	<form enctype="multipart/form-data"  action="./control/profileControl.php" method="post" >

    	<section>
		<input id="upload" hidden type="file"  name="pic" accept="image/jpg, image/jpeg" onchange="PreviewImage();" />
	</section>
	<aside class="tips" hidden id="pictip">Please choose any jpg or jpeg file less than 1 MB</aside>
	<h1><?php echo $obj->getUsername();?></h1>
 	<h2>Email: <?php echo $obj->getEmail();?></h2>
	
	<hr />
	<h2>Self Description:</h2>
	<p><textarea rows="5" cols="100%" name="selfDes" id="selfdes" placeholder="introduce yourself"  readonly><?php echo htmlspecialchars($obj->getSelfdescription());?></textarea></p>

	<section class="hidden" id="hidden">
		<hr />
		<h2>Change password <span class="spanen"><input type="checkbox" id="enbox" onclick="enablepwdchange()">enable</span></h2>
		<p>Old password: <input type="password" id="oldpassword" name="oldpassword" required pattern="[a-zA-Z0-9]{6,20}" readonly/></p>
		<p>New password: <input type="password" id="newpassword" name="newpassword" required pattern="[a-zA-Z0-9]{6,20}" readonly/></p>
		<p>Re-type password: <input type="password" id="retype" name="confirmpassword" required pattern="[a-zA-Z0-9]{6,20}" readonly/></p>
	</section>
	<section>
		<hr />
		<input type="button"  id="editpro" onclick="return change()" value="Edit Profile">
		<input id="submit"  hidden="hidden" type="submit" value="Submit" onclick="return checkpawd()" />
		<input id="cancel"  hidden="hidden" type="button" value="Cancel" onclick="refresh()" />
	</section>

	</form>
  </section>
</section>