
var xmlHttp=createXmlHttpRequest();
function findUser()
{
	var username = document.getElementById("sendToUser").value;
	if(username.length>0 && username.length<=15)
	{
		if(xmlHttp.readyState == 0 || xmlHttp.readyState == 4)
		{
			xmlHttp.open("GET","./ajax/inboxajax.php?username="+username,true);
			xmlHttp.onreadystatechange=handleServerResponse;
			xmlHttp.send();
		}
		else setTimeout('findUser()',1000);
	}
	else
	{
		document.getElementById("hideuserbg").style.display="none";
	}
}



function handleServerResponse()
{
	if(xmlHttp.readyState==4)
	{
		if(xmlHttp.status==200)
		{
			var x=xmlHttp.responseXML.getElementsByTagName("user");
			if(x.length==0)
				document.getElementById("hideuserbg").style.display="none";
			else
			{
				var list=document.getElementById("hideuserbg");
				while(list.hasChildNodes())
				list.removeChild(list.childNodes[0]);
				list.style.display="block";
				for(i=0;i<x.length;i++)
				{
					var test1=document.createElement("list");
					var content=x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue;
					var node=document.createTextNode(content);
					test1.appendChild(node);
					document.getElementById("hideuserbg").appendChild(test1);
					var br=document.createElement("br");
					document.getElementById("hideuserbg").appendChild(br);
					
				}
			}
		}
	}
}

function checkpwd()
{
	var pwd=document.getElementById("pwd").value;
	var cfmpwd=document.getElementById("pwdcfm").value;
	if(pwd!=cfmpwd && cfmpwd)
		document.getElementById("cfmpwd").innerHTML="please type the same password";
	else
		document.getElementById("cfmpwd").innerHTML="";
}


function createXmlHttpRequest()
{
	var xmlHttp;
	try
	{
		xmlHttp = new XMLHttpRequest();
	}
	catch(e)
	{
		try
		{
			xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
		}
		catch(e)
		{
			xmlHttp = false;
		}
	}
	if(!xmlHttp)
		alert("Error creating the XMLHttpRequest");
	else
		return xmlHttp;
}