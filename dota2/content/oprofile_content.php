<?php 
include_once "./domain/editusr.php";
if(isset($_SESSION['otherUserInfo']))
{
	$obj=$_SESSION['otherUserInfo'];
	$obj=unserialize($obj);
}
else if(isset($_GET['otherUser']))
{
	$n=$_GET['otherUser'];
	if($n==$_SESSION['user'])
	{
		header("Location: ./control/getuserinfoControl.php");
	}
	else
	{
		header("Location: ./control/getOtherInfoControl.php?otherUser=$n");
	}
}
else{
	header("Location: ./index.php");
}
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


	<h1><?php echo $obj->getUsername();?></h1>
 	<h2>Email: <?php echo $obj->getEmail();?></h2>
	
	<hr />
	<h2>Self Description:</h2>
	<p><textarea rows="5" cols="100%" name="123" id="selfdes" placeholder="introduce yourself"  readonly><?php echo $obj->getSelfdescription();?></textarea></p>
  </section>
</section>
<?php 
	unset($_SESSION['otherUserInfo']);
?>