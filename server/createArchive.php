<?php
     if(isset($_POST['data'])){
        $campaignDetails=json_decode($_POST['data']);
		$user_id=$_POST['user_id'];
		$campaign_id=$campaignDetails->id;
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
		 $username=$campaignDetails->user_name;
		 $duration=$campaignDetails->duration;
		 $fSize=$campaignDetails->fSize;
		 $deactivation=deactivate_campaign();
		 if($deactivation==1){
			db_store();
		 }
     }
     function db_store(){
		global $campaignName,$campaignCountry,$campaignDate,$campaign_id,
		$startDate,$endDate,$campaignDisplays,$campaignCost,$mediaType,
		$multiplyConstant,$numberOfDays,$numberOfScreens,
		$user_id, $created,$username,$duration,$fSize,$campaignMedia;
		//database configs
		$configs=include('config.php');
		$db_host=$configs['db_configs']['host'];
        $db_user=$configs['db_configs']['user'];
        $db_password=$configs['db_configs']['password'];
        $db=$configs['db_configs']['users_db'];
		try{
			$connection=mysqli_connect($db_host,$db_user,$db_password,$db);
			if(mysqli_connect_error()){
				throw new Exception(mysqli_connect_error());
			}
			if($connection){
				//escape string
				$campaignNameX=mysqli_real_escape_string($connection,$campaignName);
				//sql string
				$sql="INSERT INTO archived_campaigns(campaign_id,user_id,user_name,campaign_name,country,start_date,end_date,created,displays,
				media,duration,fsize,media_type,cost,numberOfScreens,numberOfDays,multiplyConstant,campaignDate,approved,paid) 
				VALUES($campaign_id,$user_id,'$username','$campaignNameX','$campaignCountry','$startDate','$endDate','$created','$campaignDisplays','$campaignMedia',$duration,$fSize,'$mediaType',
					$campaignCost,$numberOfScreens,$numberOfDays,$multiplyConstant,'$campaignDate',0,0)";
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
	function deactivate_campaign(){
		global $user_id,$campaign_id;
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
                $sql="DELETE FROM  digit_ad_campaign_store WHERE id=$campaign_id AND user_id=$user_id";
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