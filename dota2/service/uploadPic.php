<?php
	function uploadPic($obj,$u)
	{
		//judge if this file is valid;
		if(is_uploaded_file($obj['tmp_name']))
		{
			$filefullname=$obj['name'];
			$filesize=$obj['size'];
			$index=strripos($filefullname, ".");
			$filename=substr($filefullname, 0,$index);
			$filetype=substr($filefullname, $index+1);
			$filetype=strtolower($filetype);

			if($filesize/1024>=1024)
			{
				return -1;
			}
			else if(strcmp($filetype, "jpg")!=0&&strcmp($filetype, "jpeg")!=0)
			{
				return -1;
			}
			if(substr($_SERVER['DOCUMENT_ROOT'],-1)=="/")
				$usrfile=$_SERVER['DOCUMENT_ROOT']."dota2/usr/$u/$filefullname";
			else $usrfile=$_SERVER['DOCUMENT_ROOT']."/dota2/usr/$u/$filefullname";
			//delete other pics
			if(substr($_SERVER['DOCUMENT_ROOT'],-1)=="/")
				$path=$_SERVER['DOCUMENT_ROOT']."dota2/usr/$u";
			else $path=$_SERVER['DOCUMENT_ROOT']."/dota2/usr/$u";
			if (is_dir($path)){			
				if ($dh = opendir($path)){
					while (($file = readdir($dh))!= false){
						$filePath = $path."/".$file;
						unlink($filePath);
					}
					closedir($dh);
				}
			}
			else{
				return -1;
			}
			if(move_uploaded_file($obj['tmp_name'],$usrfile))
			{
				$text="<?php header('Location: ../../index.php');?>";
				$filename="../usr/$u/index.php";
				$fp=fopen($filename, "w");
				fwrite($fp, $text);
				fclose($fp);
				return 1;
			}
			else{
				return -1;
			}
		}
		else{
			return 2;
		}
		
	}
?>