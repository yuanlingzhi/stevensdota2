	function refresh()
	{
		location.href="./profile.php";
	}

	function change()
	{
		
		document.getElementById("upload").hidden=false;
		document.getElementById("selfdes").readOnly=false;
		document.getElementById("hidden").style.display="block";
		document.getElementById("submit").hidden=false;
		document.getElementById("editpro").hidden=true;
		document.getElementById("cancel").hidden=false;
		document.getElementById("pictip").hidden=false;

		
		return false;
	}
	function checkpawd()
	{
		var newp=document.getElementById("newpassword");
		var rep=document.getElementById("retype");
		if(newp.value!=rep.value)
		{
			alert("please make sure the new password is the same with re-type one! ");
			newp.value="";
			rep.value="";
			return false;
		}
	}
	
    function PreviewImage() {
        var oFReader = new FileReader();
        oFReader.readAsDataURL(document.getElementById("upload").files[0]);

        oFReader.onload = function (oFREvent) {
            document.getElementById("img").src = oFREvent.target.result;
        };
    };
	
	
	
  	function enablepwdchange()
	{
            var box = document.getElementById("enbox");
            if (box.checked) {
		document.getElementById("oldpassword").readOnly=false;
		document.getElementById("newpassword").readOnly=false;
		document.getElementById("retype").readOnly=false;
		return true;
            }
            else {
		document.getElementById("oldpassword").value="";
		document.getElementById("newpassword").value="";
		document.getElementById("retype").value="";
		document.getElementById("oldpassword").readOnly=true;
		document.getElementById("newpassword").readOnly=true;
		document.getElementById("retype").readOnly=true;
		return false;           
	    }
    }
	