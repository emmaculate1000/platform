<?php
	include('mail.php');
	session_start();
	//include satization script
	include('../dataCleaner.php');
	//include config file
	if($_SERVER['REQUEST_METHOD']=='POST'){
		$configs=include('../config.php');
		if(isset($_POST['purpose']) AND $_POST['purpose']=='registration'){
			$f_name=cleaner($_POST['f_name']);
			$l_name=cleaner($_POST['l_name']);
			$email=cleaner($_POST['email']);
			$password=cleaner($_POST['password']);
			if(!empty($f_name) and !empty($l_name)and !empty($email)and !empty($password))
			{
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
		            	$f_nameX=mysqli_real_escape_string($connection,$f_name);
		            	$l_nameX=mysqli_real_escape_string($connection,$l_name);
		            	$emailX=mysqli_real_escape_string($connection,$email);
		            	$passwordX=md5(mysqli_real_escape_string($connection,$password));
		            	//insert data into database
						$sql="INSERT INTO digitad(first_name,last_name,email,password) VALUES('$f_nameX','$l_nameX','$emailX','$passwordX')";
						$query=mysqli_query($connection,$sql);
						if(!$query){
							throw new Exception(mysqli_error($query));	
						}
						if($query){
							//send email
							my_mailer($email,$passwordX,$smtpConfig);
						}
		            }
				}catch(Exception $e){
					print_r($e);
				}
			}
		}
	}
	
?>