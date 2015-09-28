<?php
header("Content-Type: text/xml");
echo "<?xml version='1.0' encoding='UTF-8' standalone='yes'?>\n";

echo "<response>\n";
include_once '../include/DatabaseClass.php';

$db = new database();
$db->connect();
if(isset($_GET['username']))
{
	$u=$_GET['username'];
	$u=addslashes($u);
	$sql="select username from user where username like '%$u%' limit 5";
	$res=$db->send_sql($sql);
	while($m=$res->fetch_row())
	{
		echo "\t<user>\n";
		echo "\t\t<name>$m[0]</name>\n";
		echo "\t</user>\n";
	}
}

$db->disconnect();
echo "</response>\n";

?>