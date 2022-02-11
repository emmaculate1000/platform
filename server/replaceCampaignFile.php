<?php
	header('Access-Control-Allow-Methods:GET,POST');
	header('Access-Control-Allow-Headers:x-requested-with,Origin,Content-Type,X-Auth-Token,Authorization');
	header('Access-Control-Allow-Credentials:true');
	include('dataCleaner.php');
	include('upload_processor.php');
	$errors=[];
	//file containing processing functions
    //include("processing_functions.php");
	if(isset($_POST['data'])){
		$user_id=$_POST['user_id'];
		$file=$_POST['file'];
        $campaignId=$_POST['campaignId'];
		$media_for_user=$_POST['media_for_user'];
		db_store();
	}
	function db_store(){
		include('mail.php');
		global $errors,$media_for_user,$campaignId,$file;
		$created=date("d-m-Y");
		//database configs
		$configs=include('config.php');
		$db_host=$configs['db_configs']['host'];
        $db_user=$configs['db_configs']['user'];
        $db_password=$configs['db_configs']['password'];
        $db=$configs['db_configs']['users_db'];
		$smtpConfig=$configs['smtp_cred'];
		//connect to database
		try{
			$connection=mysqli_connect($db_host,$db_user,$db_password,$db);
			if(mysqli_connect_error()){
				throw new Exception(mysqli_connect_error());
			}
			if($connection){
                $sql="UPDATE digit_ad_campaign_store SET media='$file',media_for_user='$media_for_user',approved=0 WHERE id=$campaignId";
				//sql string
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