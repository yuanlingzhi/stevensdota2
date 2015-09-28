

	function show()  
	{
	   var hideobj=document.getElementById("hidebg");
	   hidebg.style.display="block";  
	   hidebg.style.height=document.body.clientHeight+"px";  
	   document.getElementById("hidebox").style.display="block";  
	}
	function hide()
	{
		document.getElementById("hidebox").style.display="none";
		document.getElementById("hidebg").style.display="none";    
	}
	function hideUser()
	{
		document.getElementById("hideuserbg").style.display="none";
	}

