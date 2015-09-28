$(document).ready(function(){

			$(".Index_Module img").each(function(){
				$(this).mouseenter(
					function()
					{
						$(this).css({
							height:'250px',
							width:'250px'
						  });
					});
				$(this).mouseleave(
				function()
				{
					$(this).css({
					width: "200px",
					height: "200px", 
					}, 10);
				});	
			});
});

function checkdateformat()
{
	var time1 = new Date().getTime();
	time1 = time1 / 1000;

	var date1=document.getElementById("eventDate1").value;
	var date2=document.getElementById("eventDate2").value;
	var pattern1=/^20[0-9]{2}-[01][0-9]-[0-3][0-9]$/;
	var pattern2=/^[0-2][0-9]:[0-5][0-9]$/;
	if(!pattern1.test(date1))
	{
		alert("please input valid date format(yyyy-mm-dd)!");
		return false;
	}
	else if(!pattern2.test(date2))
	{
		alert("please input valid time format(hh:mm)!");
		return false;
	}
	else{
		
		date1=date1.replace(/\-/g,"/");		
		var t1 = date1+" "+date2+":00";		
		var time2 = new Date(t1);
		time2 = time2 / 1000;
		if((time2-time1)>604800||(time2-time1)<0)
		{
			alert("please choose the date within one week!");
			return false;
		}
		return true;
	}
}

function quitEvent()
{
	document.getElementById("joinOrQuit").action="./control/quitEventCtrl.php";
}
function joinEvent()
{
	document.getElementById("joinOrQuit").action="./control/joinEventCtrl.php";
}

function nextPage(obj)
{
	obj.setAttribute("hidden","hidden");
	var oid=obj.id.split("section");
	oid[1]++;
	var iid="section"+oid[1];
	document.getElementById(iid).removeAttribute("hidden");
}
function prevPage(obj)
{
	obj.setAttribute("hidden","hidden");
	var oid=obj.id.split("section");
	oid[1]--;
	var iid="section"+oid[1];
	document.getElementById(iid).removeAttribute("hidden");
}
function checkJoinOrQuit()
{
	
	if(document.getElementById("joinOrQuit").action.indexOf("joinEventCtrl")!=-1)
	{
		var room=document.getElementById("roomAvailable").innerHTML;
		if(room=="unlimit")
		return true;
		var index1=room.indexOf("/");
		var available=room.substring(0,index1);
		var maxlimit=room.substring(index1+1);
		if((available-maxlimit)>=0)
		{
			alert("No room available!");
			return false;
		}

		return true;
	}
}

function checkChatContent()
{		
	if((document.getElementsByName("content")[0].value).length>1000)
	{
		alert("Content should be no more than 1000 characters");
		return false;
	}
	var arr=document.getElementsByName("content")[0].value.split(/\s/);
	for(var i=0;i<arr.length;i++)
	{
		if(arr[i].length>50)
		{
			alert("Words should be less than 50 characters");
			return false
		}
	}
	return true;
}

function checkNewsContent()
{		
	var arr=document.getElementsByName("content")[0].value.split(/\s/);
	for(var i=0;i<arr.length;i++)
	{
		if(arr[i].length>50)
		{
			alert("Words should be less than 50 characters");
			return false
		}
	}
	return true;
}

function toHome()
{
	window.location.href="index.php";
}

function headerResize()
{
	if(window.innerWidth>1300)
	{
		document.getElementById("cheader").style.width="100%";
		document.getElementById("cheader").style.position="fixed";
		document.getElementById("cfooter").style.width="100%";
	}
	else 	
	{
		document.getElementById("cheader").style.width="1300px";
		document.getElementById("cheader").style.position="absolute";
		document.getElementById("cfooter").style.width="1300px";
	}
}

window.onload=headerResize;
window.onresize=headerResize;