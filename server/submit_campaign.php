<?php
	header('Access-Control-Allow-Origin:http://digitad.us-east-2.elasticbeanstalk.com');
	header('Access-Control-Allow-Methods:GET,POST');
	header('Access-Control-Allow-Headers:x-requested-with,Origin,Content-Type,X-Auth-Token,Authorization');
	header('Access-Control-Allow-Credentials:true');
	include('dataCleaner.php');
	include('upload_processor.php');
	$errors=[];
	//file containing processing functions
    include("processing_functions.php");
	//change configuration settings
	/*ini_set('upload_max_filesize', '300M');
	ini_set('post_max_size', '300M');
	ini_set('max_input_time', 300);
	ini_set('max_execution_time', 300);*/
	if(isset($_POST['data'])){
	 	$campaignDetails=json_decode($_POST['data']);
		$user_id=$_POST['user_id'];
	 	$campaignName=cleaner($campaignDetails->campaignName);
	 	$campaignCapacity=$campaignDetails->campaignCapacity;
	 	$campaignCountry=$campaignDetails->campaignCountry;
	 	$campaignDate=json_encode($campaignDetails->campaignDate);
	 	$startDate=$campaignDetails->startDate;
	 	$endDate=$campaignDetails->endDate;
	 	$campaignDisplays=json_encode($campaignDetails->campaignDisplays);
	 	$campaignMedia=$campaignDetails->campaignMedia;
	 	$campaignCost=$campaignDetails->campaignCost;
	 	$mediaType=$campaignDetails->mediaType;
	 	$multiplyConstant=$campaignDetails->multiplyConstant;
	 	$numberOfDays=$campaignDetails->numberOfDays;
	 	$numberOfScreens=$campaignDetails->numberOfScreens;
		$duration=$campaignDetails->duration;
		$fSize=$campaignDetails->fSize;
		$username=$_POST['user_name'];
		$app="http://digitad.us-east-2.elasticbeanstalk.com/";
		if(isset($_FILES['file']['name'])){
			$videoXtensions=['video/mp4','video/webm'];
			$imageXtension=['image/jpeg','image/jpg','image/png'];
			if(in_array($mediaType,$videoXtensions)){
				//media is a video
				$video=$_FILES['file'];
				$video_name=$_FILES['file']['name'];
                $video_folder="media/";
                $media_file=video_uploader($video,$video_name,$video_folder);
				db_store($media_file);
			}elseif(in_array($mediaType,$imageXtension)){
				//media is an image 
				$image=$_FILES['file'];
				$image_name=$_FILES['file']['name'];
				$image_folder="img/";//campaign_images
				$media_file=uploader($image_name,$image,$image_folder);
				//imageRotator($media_file,$image_name,$image_folder);
				//db_store($media_file);
			}
		}
		
	}
	function db_store($file){
		global $campaignName,$campaignCountry,$campaignDate,
		$startDate,$endDate,$campaignDisplays,$campaignCost,$mediaType,
		$multiplyConstant,$numberOfDays,$numberOfScreens,
		$campaignCapacity,$user_id,$username,$duration,$fSize,$errors,$app;
		$created=date("d-m-Y");
		//database configs
		$configs=include('config.php');
		$db_host=$configs['db_configs']['host'];
        $db_user=$configs['db_configs']['user'];
        $db_password=$configs['db_configs']['password'];
        $db=$configs['db_configs']['users_db'];
		if(file_exists("img/".$file) or file_exists("media/".$file)){
			//echo "file exists";
			//connect to database
			try{
				$connection=mysqli_connect($db_host,$db_user,$db_password,$db);
				if(mysqli_connect_error()){
					throw new Exception(mysqli_connect_error());
				}
				if($connection){
					//echo "connected!";
					//escape string
					$campaignNameX=mysqli_real_escape_string($connection,$campaignName);
					//sql string
					$sql="INSERT INTO digit_ad_campaign_store(user_id,user_name,campaign_name,country,start_date,end_date,created,displays,
					media,duration,fsize,media_type,capacity,cost,numberOfScreens,numberOfDays,multiplyConstant,campaignDate) 
					VALUES($user_id,'$username','$campaignNameX','$campaignCountry','$startDate','$endDate','$created','$campaignDisplays','$file',$duration,$fSize,'$mediaType','$campaignCapacity',
						$campaignCost,$numberOfScreens,$numberOfDays,$multiplyConstant,'$campaignDate')";
					$result=mysqli_query($connection,$sql);
					if($result){
						echo 1;	
					}else{
						throw new Exception(mysqli_error($result));
					}
					mysqli_close($connection);
				}
			}catch(Exception $e){
				print_r($e);
			}
		}
		clearstatcache();
	}
	
?>