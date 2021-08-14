<?php
	//error_reporting(0);
	//function to resize images
	function photoResizer($fileName,$uploadedFile,$storageFolder){
		//check if file exists
		if(file_exists($uploadedFile)){
			//check for jpeg
			if(preg_match('/[.]jpg$/', $fileName)){
				$oldImage=imagecreatefromjpeg($uploadedFile);
			}
			//check for gif
			if(preg_match('/[.]gif$/', $fileName)){
				$oldImage=imagecreatefromgif($uploadedFile);
			}
			//check for png
			if(preg_match('/[.]png$/', $fileName)){
				$oldImage=imagecreatefrompng($uploadedFile);
			}
			//get old width and height
			$oldWidth=imagesx($oldImage);
			$oldHeight=imagesy($oldImage);
			//set new width and height
			$newWidth=floor(($oldWidth)/4);
			$newHeight=floor(($newWidth/$oldWidth)*$oldHeight);
			//create new copy of image
			$newImage=imagecreatetruecolor($newWidth, $newHeight);
			//resize new copy of image
			imagecopyresized($newImage, $oldImage,0,0,0,0, $newWidth, $newHeight, $oldWidth, $oldHeight);
			//store image in folder
			imagejpeg($newImage,$storageFolder.$fileName);
			$new_image_url=$storageFolder.$fileName;
			//delete old image
			unlink($uploadedFile);
			return $new_image_url;
		}
	}
	//function to rotate  images
	function imageRotator($imagefile,$fileName,$storageFolder){
		if(file_exists($imagefile)){
			if(exif_read_data($imagefile)){
				//check file type
				$exif=exif_read_data($imagefile);
				if($orientation=@$exif['Orientation']){
					if($orientation){
						if(preg_match('/[.]jpg$/', $fileName)){
							$oldImage=imagecreatefromjpeg($imagefile);
						}
						//check for gif
						if(preg_match('/[.]gif$/', $fileName)){
							$oldImage=imagecreatefromgif($imagefile);
						}
						//check for png
						if(preg_match('/[.]png$/', $fileName)){
							$oldImage=imagecreatefrompng($imagefile);
						}
						//check gpeg file
						if(preg_match('/[.]jpeg$/', $fileName)){
							$oldImage=imagecreatefromjpeg($imagefile);
						}
						//switch orientation and determine angle
						switch($orientation){
							case 1:
							$angle=0;
							break;
							case 8:
							$angle=90;
							break;
							case 3:
							$angle=180;
							break;
							case 6:
							$angle=270;
							break;
						}
						//rotate image
						$rotatedImage=imagerotate($oldImage, $angle,0);
						imagejpeg($rotatedImage,$storageFolder.$fileName);
						imagedestroy($rotatedImage);
					}
				}
				

			}
		}
	}
?>