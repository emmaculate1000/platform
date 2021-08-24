<?php
	//error_reporting(0);
	//function to upload image
	function uploader($filename,$file,$storageFolder){
		//variable holding errors
		global $errors;
		//chage filename to lowercase
		$newFileName=strtolower(basename($filename));
		//file  storage location
		$location=$storageFolder;
		$temporalName=explode(".",$newFileName);
		$final_file_Name=round(microtime(true)). ".". end($temporalName);
		//permanent location
		$finalLocation=$location.$final_file_Name;
		$templocation=$file['tmp_name'];
		$allowedExtensions=['jpg','png','wbmp','jpeg','gif','JPG','PNG','JPEG','GIF'];
		//explode string and get file extension
		$extension1=explode('.', $newFileName);
		//get end of string
		$extension2=end($extension1);
		if(in_array($extension2, $allowedExtensions)){
			//count errors before movx file
			if(count($errors)==0){
				if(move_uploaded_file($templocation,$finalLocation)){
					return $final_file_Name;
				}else{
					return 0;
				}
			}
		}else{
			array_push($errors,55);
		}
	}
	//function to upload videos
	function video_uploader($file,$filename,$storageFolder){
		//variable holding errors
		global $errors;
		//chage filename to lowercase
		$newFileName=strtolower(basename($filename));
		//file  storage location
		$location=$storageFolder;
		$temporalName=explode(".",$newFileName);
		$final_file_Name=round(microtime(true)). ".". end($temporalName);
		//permanent location
		$finalLocation=$location.$final_file_Name;
		$templocation=$file['tmp_name'];
		$fileSize=$file['size'];
		$allowedExtensions=["mp4","avi","webm"];
		//explode string and get file extension
		$extension1=explode('.', $newFileName);
		//get end of string
		$extension2=end($extension1);
		if(in_array($extension2, $allowedExtensions)){
			//count errors before movx file
			if(count($errors)==0){
				move_uploaded_file($templocation, $finalLocation);
			}
		}else{
			array_push($errors,5);
		}
		return $final_file_Name;
	}
?>