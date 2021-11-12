<?php
	include('processing_functions.php');
	include('upload_processor.php');
	if($_SERVER['REQUEST_METHOD']=='POST'){
		if(isset($_FILES['file']['name'])){
			$videoXtensions=['video/mp4','video/webm'];
			$imageXtension=['image/jpeg','image/jpg','image/png'];
			if(in_array($mediaType,$videoXtensions)){
				//media is a video
				$video=$_FILES['file'];
				$video_name=$_FILES['file']['name'];
				$video_folder="img/";
				$media_file=video_uploader($video,$video_name,$video_folder);
				$feedback=['file'=>$media_file,'success'=>1];
				echo json_encode($feedback);
			}elseif(in_array($mediaType,$imageXtension)){
				//media is an image 
				$image=$_FILES['file'];
				$image_name=$_FILES['file']['name'];
				$image_folder="video/";//campaign_images
				$media_file=uploader($image_name,$image,$image_folder);
				imageRotator($media_file,$image_name,$image_folder);
				$feedback=['file'=>$media_file,'success'=>1];
				echo json_encode($feedback);
			}
			
		}
	}
	
?>