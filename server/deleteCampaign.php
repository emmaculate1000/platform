<?php
    //database configs
    $configs=include('config.php');
    $db_host=$configs['db_configs']['host'];
    $db_user=$configs['db_configs']['user'];
    $db_password=$configs['db_configs']['password'];
    $db=$configs['db_configs']['users_db'];
    $smtpConfig=$configs['smtp_cred'];
    //error_reporting(0);
     if(isset($_POST['data'])){
        $campaignDetails=json_decode($_POST['data']);
		$user_id=$_POST['user_id'];
	 	$campaignId=$campaignDetails->id;
        ////////////////////
		$email=$campaignDetails->email;
		$file=$campaignDetails->campaignMedia;
		$media_for_user=$campaignDetails->media_for_user;
	 	$campaignName=$campaignDetails->campaignName;
	 	$campaignCapacity=$campaignDetails->campaignCapacity;
	 	$campaignCountry=$campaignDetails->campaignCountry;
	 	$campaignDate=$campaignDetails->created;
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
		$premium=$campaignDetails->premium;
		$username=$campaignDetails->user_name;
		$premium=$campaignDetails->premium==true?1:0;
		$premiumData=json_encode($campaignDetails->premium_data);
        /////////////////
        delete_item();
     }
     function delete_item(){
		global $user_id,$campaignId,$campaignMedia,$mediaType,$configs,
        $db_host,$db_user,$db_password,$db;
		//connect to database
        try{
            $connection=mysqli_connect($db_host,$db_user,$db_password,$db);
            if(mysqli_connect_error()){
                throw new Exception(mysqli_connect_error());
            }
            if($connection){
                //sql string
                $sql="DELETE FROM  archived_campaigns WHERE campaign_id=$campaignId AND user_id=$user_id";
                $sql2="DELETE FROM  digit_ad_campaign_store WHERE id=$campaignId AND user_id=$user_id";
                $result=mysqli_query($connection,$sql);
                $result2=mysqli_query($connection,$sql2);
                if($result or $result2){
                    createHistory();
                }else{
                    throw new Exception(mysqli_error($result));
                }
                mysqli_close($connection);
            }
        }catch(Exception $e){
            print_r($e);
        }
	}
    function createHistory(){
        global $campaignName,$campaignCountry,$campaignDate,
		$startDate,$endDate,$campaignDisplays,$campaignCost,$mediaType,
		$multiplyConstant,$numberOfDays,$numberOfScreens,
		$campaignCapacity,$user_id,$username,$duration,$fSize,
        $errors,$media_for_user,$email,$configs,$db_host,$db_user,$db_password,
        $db,$smtpConfig,$file,$premium,$premiumData;;
		$created=date("d-m-Y");
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
				$sql="INSERT INTO history(user_id,user_name,email,campaign_name,country,start_date,end_date,created,displays,
				media,duration,fsize,media_type,capacity,cost,numberOfScreens,numberOfDays,multiplyConstant,campaignDate,media_for_user,premium,premiumData) 
				VALUES($user_id,'$username','$email','$campaignNameX','$campaignCountry','$startDate','$endDate','$created','$campaignDisplays','$file',$duration,$fSize,'$mediaType','$campaignCapacity',
					$campaignCost,$numberOfScreens,$numberOfDays,$multiplyConstant,'$campaignDate','$media_for_user',$premium,'$premiumData')";
				$result=mysqli_query($connection,$sql);
				if($result){
					//send email
					echo 1;
				}else{
					throw new Exception(mysqli_error($result));
				}
				mysqli_close($connection);
			}
		}catch(Exception $e){
			print_r($e);
		}
		clearstatcache();
    }
?>