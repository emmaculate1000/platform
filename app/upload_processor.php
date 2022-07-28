<?php
	error_reporting(0);
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
		$fileSize=$file['size'];
		$allowedExtensions=['jpg','png','wbmp','jpeg'];
		//explode string and get file extension
		$extension1=explode('.', $newFileName);
		//get end of string
		$extension2=end($extension1);
		if(in_array($extension2, $allowedExtensions)){
			//count errors before movx file
			if(count($errors)==0){
				move_uploaded_file($templocation, $finalLocation);
				if (file_exists("profile/".$filename)) {
					unlink("profile/".$filename);
				}
			}
		}else{
			array_push($errors,55);
		}
		return $finalLocation;
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
		return $finalLocation;
	}
?>