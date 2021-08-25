<?php
     if(isset($_POST['data'])){
        $campaignDetails=json_decode($_POST['data']);
		$user_id=$_POST['user_id'];
	 	$campaignName=$campaignDetails->campaignName;
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
		 $created=$campaignDetails->created;
		 $archive_id=$campaignDetails->id;
		 $username=$campaignDetails->user_name;
		 //remove campaign from archive
		 $deactivate_archive=deactivate_archive();
		 if($deactivate_archive==1){
			 //store campaign in store
			db_store($campaignMedia);
		 }
         
     }
     function db_store($file){
		global $campaignName,$campaignCountry,$campaignDate,
		$startDate,$endDate,$campaignDisplays,$campaignCost,$mediaType,
		$multiplyConstant,$numberOfDays,$numberOfScreens,$campaignCapacity,$user_id, $created,$username;
		//database configs
		$configs=include('config.php');
		$db_host=$configs['db_configs']['host'];
        $db_user=$configs['db_configs']['user'];
        $db_password=$configs['db_configs']['password'];
        $db=$configs['db_configs']['users_db'];
		if(file_exists("img/".$file)||file_exists("media/".$file)){
			//connect to database
			try{
				$connection=mysqli_connect($db_host,$db_user,$db_password,$db);
				if(mysqli_connect_error()){
					throw new Exception(mysqli_connect_error());
				}
				if($connection){
					//escape string
					$campaignNameX=mysqli_real_escape_string($connection,$campaignName);
					//sql string
					$sql="INSERT INTO digit_ad_campaign_store(user_id,user_name,campaign_name,country,start_date,end_date,created,displays,
					media,media_type,capacity,cost,numberOfScreens,numberOfDays,multiplyConstant,campaignDate,approved,paid) 
					VALUES($user_id,'$username','$campaignNameX','$campaignCountry','$startDate','$endDate','$created','$campaignDisplays','$file','$mediaType','$campaignCapacity',
						$campaignCost,$numberOfScreens,$numberOfDays,$multiplyConstant,'$campaignDate',1,0)";
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
		}else{
            echo 5;
        }
		clearstatcache();
	}
	function deactivate_archive(){
		global  $archive_id;
		//database configs
		$configs=include('config.php');
		$db_host=$configs['db_configs']['host'];
        $db_user=$configs['db_configs']['user'];
        $db_password=$configs['db_configs']['password'];
        $db=$configs['db_configs']['users_db'];
		//connect to database
        try{
            $connection=mysqli_connect($db_host,$db_user,$db_password,$db);
            if(mysqli_connect_error()){
                throw new Exception(mysqli_connect_error());
            }
            if($connection){
                //sql string
                $sql="DELETE FROM   archived_campaigns WHERE id=$archive_id";
                $result=mysqli_query($connection,$sql);
                if($result){
                    return 1;
                }else{
                    throw new Exception(mysqli_error($result));
                }
                mysqli_close($connection);
            }
        }catch(Exception $e){
            print_r($e);
        }
	}
?>