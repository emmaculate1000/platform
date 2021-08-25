<?php
    //error_reporting(0);
     if(isset($_POST['data'])){
        $campaignDetails=json_decode($_POST['data']);
		$user_id=$_POST['user_id'];
	 	$campaignId=$campaignDetails->id;
	 	$campaignMedia=$campaignDetails->campaignMedia;
        $mediaType=$campaignDetails->mediaType;
         delete_item();
     }
     function delete_item(){
		global $user_id,$campaignId,$campaignMedia,$mediaType;
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
                $sql="DELETE FROM  archived_campaigns WHERE campaign_id=$campaignId AND user_id=$user_id";
                $sql2="DELETE FROM  digit_ad_campaign_store WHERE id=$campaignId AND user_id=$user_id";
                $result=mysqli_query($connection,$sql);
                $result2=mysqli_query($connection,$sql2);
                if($result or $result2){
                    $videoXtensions=['video/mp4','video/webm'];
			        $imageXtension=['image/jpeg','image/jpg','image/png'];
                    if(in_array($mediaType,$videoXtensions)){
                        //file is a video
                        if(file_exists("media/".$campaignMedia)){
                            if(unlink("media/".$campaignMedia)){
                                echo 1;
                            }else{
                                echo 0;
                            }
                        }else{
                            echo 0;
                        }
                    }else{
                        // file is an image
                        if(file_exists("img/campaign_img/".$campaignMedia)){
                            if(unlink("img/campaign_img/".$campaignMedia)){
                                echo 1;
                            }else{
                                echo 0;
                            }
                        }else{
                            echo 0;
                        }
                    }
                    clearstatcache();
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