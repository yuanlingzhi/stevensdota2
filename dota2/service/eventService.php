<?php

include_once "/include/DatabaseClass.php";

function isAdmin()
{
	if(isset($_SESSION['user']))
	{
		$u=addslashes($_SESSION['user']);
		$db=new database();
		$db->connect();
		$sql="select * from user where username='$u' and isadmin='1'";
		$res=$db->send_sql($sql);
		if($res->num_rows>0) $r=true;
		else $r=false;
		$db->disconnect();
		return $r;
	}
	return false;
}

function isAuthor($event_id)
{

	if(isset($_SESSION['user']))
	{
		$u=addslashes($_SESSION['user']);
		$event_id=addslashes($event_id);
		$db=new database();
		$db->connect();
		$sql="select * from event,user where event_id='$event_id' and username='$u' and event.user_id=user.user_id";
		$res=$db->send_sql($sql);
		if($res->num_rows>0) $r=true;
		else $r=false;
		$db->disconnect();
		return $r;
	}
	return false;
}

function isParti($event_id)
{
	if(isset($_SESSION['user']))
	{
		$u=addslashes($_SESSION['user']);
		$event_id=addslashes($event_id);
		$db=new database();
		$db->connect();
		$sql="select * from event_participant,user where event_id='$event_id' and username='$u' and event_participant.user_id=user.user_id";
		$res=$db->send_sql($sql);
		if($res->num_rows>0) $r=true;
		else $r=false;
		$db->disconnect();
		return $r;
	}
	return false;
}

function getLatestEventId()
{
	$db=new database();
	$db->connect();
	$sql="select event_id from event order by date desc limit 1";
	$res=$db->send_sql($sql);
	if($res->num_rows==0)
	{
		$db->disconnect();
		return false;
	}
	$r= $res->fetch_row();
	return $r[0];
}
function getPartiId($eid)
{
	$db=new database();
	$db->connect();
	$eid=addslashes($eid);
	$sql="select user_id from event_participant where event_id='$eid' order by reply_id desc limit 1";
	$res=$db->send_sql($sql);
	if($res->num_rows==0)
	{
		$db->disconnect();
		return false;
	}
	$r= $res->fetch_row();
	return $r[0]+1;
}

function getTotalPage()
{
	$db=new database();
	$db->connect();
	$sql="select * from event";
	$res=$db->send_sql($sql);
	if($res->num_rows%10==0) 
	{
		$t=$res->num_rows/10;
	}
	else 
	{
		$t= intval($res->num_rows/10)+1;
	}
	$db->disconnect();
	return $t;
}

function getTypeName($tid)
{
	if($tid==1) return "Rank";
	elseif($tid==2) return "Normal";
	elseif($tid==3) return "Bots";
	elseif($tid==4) return "Test";
	elseif($tid==5) return "IH";
	elseif($tid==6) return "SOLO";
	elseif($tid==7) return "Activity";
	return "";
}

function getFullTypeName($tid)
{
	if($tid==1) return "Rank Game";
	elseif($tid==2) return "Normal Game";
	elseif($tid==3) return "Against Bots";
	elseif($tid==4) return "Idea Test";
	elseif($tid==5) return "In-House";
	elseif($tid==6) return "Hero Solo";
	elseif($tid==7) return "Activity";
	return "";
}

function result($page)
{
	$db=new database();
	$db->connect();
	$page=addslashes($page);
	$page=$page-1;
	$n=10*$page;
	$sql="select event_id,type_id,name,maxlimit,username,date from event,user where event.user_id=user.user_id order by date desc limit $n,10";
	$res=$db->send_sql($sql);
	$i=0;
	while($row[$i++]=$res->fetch_row())
	{}
	$db->disconnect();
	return $row;
}
function resultInType($type_id,$page)
{
	$db=new database();
	$db->connect();
	$page=addslashes($page);
	$type_id=addslashes($type_id);
	$page=$page-1;
	$n=10*$page;
	$sql="select event_id,type_id,name,maxlimit,username,date from event,user where event.user_id=user.user_id and type_id='$type_id' order by date desc limit $n,10";
	$res=$db->send_sql($sql);
	$i=0;
	while($row[$i++]=$res->fetch_row())
	{}
	$db->disconnect();
	return $row;
}

function getPNum($eid)
{
	$db=new database();
	$db->connect();	
	$eid=addslashes($eid);
	$sql="select * from event_participant where event_id='$eid'";
	$res=$db->send_sql($sql);
	$row=$res->num_rows;
	$db->disconnect();
	return $row;
}

function getContent($eid)
{
	$db=new database();
	$db->connect();	
	$eid=addslashes($eid);
	$sql="select type_id,name,time,maxlimit,username,location from event,user where event_id='$eid' and user.user_id=event.user_id";
	$res=$db->send_sql($sql);
	$row=$res->fetch_row();
	$db->disconnect();
	return $row;
}

function getParti($eid)
{
	$db=new database();
	$db->connect();	
	$eid=addslashes($eid);
	$sql="select username from user, event_participant where event_id='$eid' and user.user_id=event_participant.user_id";
	$res=$db->send_sql($sql);
	$i=0;
	while($row[$i++]=$res->fetch_row())
	{}
	$db->disconnect();
	return $row;
}

function createEvent($obj)
{
	$t=$obj->getEventType();
	$n=$obj->getName();
	$loc=$obj->getLocation();
	$l=$obj->getLimit();
	$ti=$obj->getTime();
	$u=$obj->getUser();
	$u=addslashes($u);
	$t=addslashes($t);
	$ti=addslashes($ti);
	$l=addslashes($l);
	if($n=="" || strlen($n)>50 || $loc=="" || strlen($loc)>50) return -1;
	$now=time();
	date_default_timezone_set('America/New_York');
	$dtoday=date("Y-m-d H:i:s",$now);
	$m=strtotime($dtoday);
	$m=$m+604800;
	$doneweek=date("Y-m-d H:i:s",$m);
	if($ti>$doneweek || $ti<$dtoday) return -1;
	$db=new database();
	$db->connect();
	$sql="select user_id from user where username='$u'";
	$res=$db->send_sql($sql);
	if(!$res)
	{
		$db->disconnect();
		return 0;
	}
	$r=$res->fetch_row();
	$u=$r[0];
	$n= htmlspecialchars($n);
	$n=addslashes($n);
	$loc= htmlspecialchars($loc);
	$loc=addslashes($loc);
	$sql="insert into event(type_id,name,time,maxlimit,user_id,location) values('$t','$n','$ti','$l','$u','$loc')";
	$res=$db->send_sql($sql);
	if(!$res) $flag=0;
	else $flag=1;
	$db->disconnect();
	return $flag;

}

function deleteEvent($eid)
{
	$db=new database();
	$db->connect();
	$eid=addslashes($eid);
	$sql="delete from event where event_id='$eid'";
	$res=$db->send_sql($sql);
	if($res) $r=true;
	else $r=false;
	$db->disconnect();
	return $r;
}

function joinEvent($u,$eid)
{
	$db=new database();
	$db->connect();	
	$u=addslashes($u);
	$eid=addslashes($eid);
	$PNum=getPNum($eid);
	$sql="select * from event where event_id='$eid' and (maxlimit>'$PNum' or maxlimit=11)";
	$res=$db->send_sql($sql);
	if($res->num_rows==0)
	{
		$db->disconnect();
		return -2;
	}
	$sql="select user_id from user where username='$u'";
	$res=$db->send_sql($sql);
	if(!$res)
	{
		$db->disconnect();
		return 0;
	}
	$r=$res->fetch_row();
	$u=$r[0];
	$sql="select * from event_participant where event_id='$eid' and user_id='$u'";
	$res=$db->send_sql($sql);
	if($res->num_rows==1)
	{
		$db->disconnect();
		return -1;
	}

	$sql="insert into event_participant(event_id,user_id) values('$eid','$u')";
	$res=$db->send_sql($sql);
	if(!$res)
	{
		$db->disconnect();
		return 0;
	}
	$db->disconnect();
	return 1;
}

function quitEvent($u,$eid)
{
	$db=new database();
	$db->connect();	
	$eid=addslashes($eid);
	$u=addslashes($u);
	$PNum=getPNum($eid);

	$sql="select user_id from user where username='$u'";
	$res=$db->send_sql($sql);
	if(!$res)
	{
		$db->disconnect();
		return 0;
	}
	$r=$res->fetch_row();
	$u=$r[0];

	$sql="delete from event_participant where event_id='$eid' and user_id='$u'";
	$res=$db->send_sql($sql);
	if(!$res)
	{
		$db->disconnect();
		return 0;
	}
	$db->disconnect();
	return 1;
}

?>