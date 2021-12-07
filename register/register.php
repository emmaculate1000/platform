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
			$created=date('d-m-Y');
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
						//check if email already exists
						$sqlCheck="SELECT *FROM digitad WHERE email='$emailX' AND password='$passwordX'";
						$checkResult=mysqli_query($connection,$sqlCheck);
						if(!$checkResult){
							throw new Exception(mysqli_error($checkResult));	
						}
						if(mysqli_num_rows($checkResult)>0){
							//user with email exists
							echo 5;
						}else{
							//register user
							$sql="INSERT INTO digitad(first_name,last_name,email,password,created) VALUES('$f_nameX','$l_nameX','$emailX','$passwordX','$created')";
							$query=mysqli_query($connection,$sql);
							if(!$query){
								throw new Exception(mysqli_error($query));	
							}
							if($query){
								//send email
								my_mailer($email,$passwordX,$smtpConfig);
							}
							mysqli_close($connection);
						}
						
		            }
				}catch(Exception $e){
					print_r($e);
				}
			}
		}
	}
	
?>