<?php
include_once "../include/DatabaseClass.php";
		function getSearchResult($key)
		{
			$all=array();
			$index=0;
			$key=addslashes($key);
			$key=str_replace("_","\_",$key);
			$key=str_replace("%","\%",$key);
			$key=htmlspecialchars($key);
			$db=new database();
			$db->connect();
			//search user
			$sql="select username from user where username = '$key'";
			$res=$db->send_sql($sql);
			while(($row=$res->fetch_assoc())!=false)
			{
				$n=$row['username'];
				$u="otherprofile.php?otherUser=$n";
				$obj=new result($n, $u);
				$all[0][$index++]=$obj;
			}
			$index=0;
			
			//search news
			$sql="select news_id,title from news where title like '%$key%' or content like '%$key%'";
			$res=$db->send_sql($sql);
			while(($row=$res->fetch_assoc())!=false)
			{
				$id=$row['news_id'];
				$n=$row['title'];
				$u="newsDetail.php?nid=$id";
				$obj=new result($n, $u);
				$all[1][$index++]=$obj;
			}	
			$index=0;
			
			//search event
			$sql="select event_id,name from event,user where name like '%$key%' or location like '%$key%' or (event.user_id=user.user_id and username like '%$key%') group by event_id";
			$res=$db->send_sql($sql);
			while(($row=$res->fetch_assoc())!=false)
			{
				$id=$row['event_id'];
				$n=$row['name'];
				$u="eventDetail.php?eid=$id";
				$obj=new result($n, $u);
				$all[2][$index++]=$obj;
			}
			$sql="select event.event_id,event.name from event,event_participant,user where 
				  event.event_id=event_participant.event_id and user.user_id=event_participant.user_id and user.username like '%$key%' group by event.event_id";
			$res=$db->send_sql($sql);
			while(($row=$res->fetch_assoc())!=false)
			{
				$flag=0;
				$id=$row['event_id'];
				$n=$row['name'];
				$u="eventDetail.php?eid=$id";
				$obj=new result($n, $u);
				if(count($all)>=3)
				{
					if(count($all[2])>0)
					{
						foreach ($all[2] as $k)
						{
							if($k->getName()==$n)
								$flag=1;
						}
					}
				}
				if($flag==0)
					$all[2][$index++]=$obj;
			}
			$index=0;
			
			//search chat
			
			$sql="select chat_id,theme,content from chat where theme like '%$key%' or content like '%$key%'";
			$res=$db->send_sql($sql);
			while(($row=$res->fetch_assoc())!=false)
			{
				$id=$row['chat_id'];
				$n=$row['theme'];
				$u="chatDetail.php?cid=$id";
				$c=$row['content'];
				$obj=new chatResult($n, $u,$c,0);
				$all[3][$index++]=$obj;
			}
			
			
			$sql="SELECT chat_reply.chat_id,theme,chat_reply.content,reply_id from chat,chat_reply where chat.chat_id=chat_reply.chat_id and chat_reply.content like '%$key%' and chat_reply.chat_id not in (select chat_id from chat where theme like '%$key%' or content like '%$key%') group by chat_reply.chat_id";
			$res=$db->send_sql($sql);
			while(($row=$res->fetch_assoc())!=false)
			{
				$reply=$row['reply_id'];
				$id=$row['chat_id'];
				$n=$row['theme'];
				$c=$row['content'];
				$u="chatDetail.php?cid=$id";
				$obj=new chatResult($n, $u,$c,$reply);
				$all[3][$index++]=$obj;
			}
		
			
			
			
			$db->disconnect();
			return $all;
		}

?>