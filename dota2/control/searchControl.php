<?php session_start();
include_once "../domain/searchClass.php";
include_once "../service/searchService.php";
if(isset($_SESSION['user'])){
	if(!isset($_REQUEST['searchKey']))
	{
		header("../index.php");
	}
	$key=$_REQUEST['searchKey'];
	$key=trim($key);
	if($key=="")
	{
		header("Location: ../index.php");
	}
	else
	{
		$obj=getSearchResult($key);
		$obj=serialize($obj);
		$_SESSION['searchResult']=$obj;
		header("Location: ../searchResult.php?key=$key");
	}
}
else
{
	header("Location: ../login.php");
}

?>