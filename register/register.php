<?php
	session_start();
	//include satization script
	include('../dataCleaner.php');
	//require 'PHPMailer/PHPMailerAutoload.php';
	//include config file
	$configs=include('../config.php');
	if($_SERVER['REQUEST_METHOD']=='POST'){
		if(isset($_POST['purpose']) AND $_POST['purpose']=='registration'){
			$f_name=cleaner($_POST['f_name']);
			$l_name=cleaner($_POST['l_name']);
			$email=$_POST['email'];
			$password=$_POST['password'];
			if(!empty($f_name) and !empty($l_name)and !empty($email)and !empty($password))
			{
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
							//send user a mail
		                   $mail=new PHPMailer();
		                    //$mail->isSMTP();
		                    $mail->Host='digitad-ooh.com';
		                    $mail->Port=465;
		                    $mail->SMTPAuth=true;
		                    $mail->SMTPSecure='tls';
		                    $mail->Username="boss1000_me";
		                    $mail->Password="emmaculate1000@Me";
		                   	$mail->setFrom('noreply@digitad-ooh.com',"Digit-Ad");
		                    $mail->addAddress($email);
		                    $mail->addReplyTo();
		                    $mail->isHTML(true);
		                    $mail->Subject="SIGN UP CONFIRMATION";
		                    $mail->Body="<h1 style='text-align:center;'>
		                    Click the link below to confirm your sign up and activate your account<br><br>
		                    <a style='width:80%;margin:10px 10%;color:yellow;text-decoration:none;' href='https://www.victexgroup.com/digit-Ad/confirm_user.php?item=$passwordX'>
		                    Click Here To Confirm Your Email Address</a>
		                    </h1>";
		                    if(!$mail->send()){
		                        echo 0;
		                    }else{
		                        echo 1;
		                    }
						}
		            }
				}catch(Exception $e){
					print_r($e);
				}
			}
		}
	}
	
?>