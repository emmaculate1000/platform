<?php
	session_start();
	//include satization script
	include('../dataCleaner.php');
	//include config file
	$configs=include('../config.php');
	if(isset($_SESSION['reset_credentials'])){
		if(isset($_POST['password'])){
			$password=cleaner($_POST['password']);
			$userCredentials=$_SESSION['reset_credentials'];
			$credentials=explode('-',$userCredentials);
			$passwordX=$credentials[0];
			$email=$credentials[1];
			//connect to database
			try{
				//connect to datatbase
				$db_host=$configs['db_configs']['host'];
				$db_user=$configs['db_configs']['user'];
				$db_password=$configs['db_configs']['password'];
				$db=$configs['db_configs']['users_db'];
			$connection=mysqli_connect($db_host,$db_user,$db_password,$db);
				if(mysqli_connect_error()){
					throw new Exception(mysqli_connect_error());
				}
				if($connection){
					$emailX=mysqli_real_escape_string($connection,$email);
					$passwordY=md5(mysqli_real_escape_string($connection,$password));
					$sql="UPDATE digitad SET password='$passwordY' WHERE email='$emailX'";
					$query=mysqli_query($connection,$sql);
					if(!$query){
						throw new Exception(mysqli_error($query));
					}else{
					echo 1;
					}
				}else{
					echo "no connection";
				}

			}catch(Exception $e){
				print_r($e);
			}
		}
	}
?>