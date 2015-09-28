
var xmlHttp=createXmlHttpRequest();
var checktype="";
function checkuser()
{
	checktype="checkusername";
	var username = document.getElementById("username").value;
	if(username.length>=3)
	{
		if(xmlHttp.readyState == 0 || xmlHttp.readyState == 4)
		{
			xmlHttp.open("GET","./ajax/signupajax.php?username="+username,true);
			xmlHttp.onreadystatechange=handleServerResponse;
			xmlHttp.send();
		}
		else setTimeout('checkuser()',1000);
	}
	else
	{
		document.getElementById("checkusername").innerHTML="";
	}
}

function checkemail()
{
	checktype="checkemail";
	var email = document.getElementById("email").value;
	if(email.length>=7)
	{
		if(xmlHttp.readyState == 0 || xmlHttp.readyState == 4)
		{
			xmlHttp.open("GET","./ajax/signupajax.php?email="+email,true);
			xmlHttp.onreadystatechange=handleServerResponse;
			xmlHttp.send();
		}
		else setTimeout('checkemail()',1000);
	}
	else
	{
		document.getElementById("checkemail").innerHTML="";
	}
}

function handleServerResponse()
{
	if(xmlHttp.readyState==4)
	{
		if(xmlHttp.status==200)
		{
			document.getElementById(checktype).innerHTML=xmlHttp.responseText;
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

function check()
{
	if(document.getElementById("checkusername").innerHTML!="" || document.getElementById("checkemail").innerHTML!="" || document.getElementById("cfmpwd").innerHTML!="")
	{
		alert("please type valid information!");
		return false;
	}
	else return true;
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