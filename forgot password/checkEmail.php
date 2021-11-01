<?php
    include('mail.php');
	session_start();
	//include satization script
	include('../dataCleaner.php');
	//include config file
	$configs=include('../config.php');
	if($_SERVER['REQUEST_METHOD']=='POST'){
		$email=cleaner($_POST['email']);
		//connect to database
		try{
			//connect to datatbase
		    $db_host=$configs['db_configs']['host'];
	        $db_user=$configs['db_configs']['user'];
	        $db_password=$configs['db_configs']['password'];
	        $db=$configs['db_configs']['users_db'];
            $smtpConfig=$configs['smtp_cred'];
	       $connection=mysqli_connect($db_host,$db_user,$db_password,$db);
            if(mysqli_connect_error()){
                throw new Exception(mysqli_connect_error());
            }
            if($connection){
            	$emailX=mysqli_real_escape_string($connection,$email);
            	$sql="SELECT *FROM digitad WHERE email='$emailX' AND active=1 LIMIT 1";
            	$query=mysqli_query($connection,$sql);
            	if(!$query){
            		throw new Exception(mysqli_error($query));	
            	}
            	if(mysqli_num_rows($query)==1){
            		$result=mysqli_fetch_assoc($query);
            		$encrypt=$result['password'];
                    my_mailer($email,$encrypt,$smtpConfig);
            	}
            }else{
				echo "no";
			}

		}catch(Exception $e){
			print_r($e);
		}
	}
?>