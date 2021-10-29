<?php
	 use PHPMailer\PHPMailer\SMTP;
	 use PHPMailer\PHPMailer\Exception;
	 require 'path/to/PHPMailer/src/Exception.php';
		require 'path/to/PHPMailer/src/PHPMailer.php';
		require 'path/to/PHPMailer/src/SMTP.php';
	//include('mail.php');
	session_start();
	//include satization script
	include('../dataCleaner.php');
	//include config file
	//my_mailer("akemshow@gmail.com");
	if($_SERVER['REQUEST_METHOD']=='POST'){
		$configs=include('../config.php');
		if(isset($_POST['purpose']) AND $_POST['purpose']=='registration'){
			$f_name=cleaner($_POST['f_name']);
			$l_name=cleaner($_POST['l_name']);
			$email=cleaner($_POST['email']);
			$password=cleaner($_POST['password']);
			echo $email;
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
						/*$sql="INSERT INTO digitad(first_name,last_name,email,password) VALUES('$f_nameX','$l_nameX','$emailX','$passwordX')";
						$query=mysqli_query($connection,$sql);
						if(!$query){
							throw new Exception(mysqli_error($query));	
						}*/
						//if($query){
							//send user a mail
		                   $mail=new PHPMailer();
		                    //$mail->isSMTP();
		                    $mail->Host='noreply@digitadooh.com';
		                    $mail->Port=465;
		                    $mail->SMTPAuth=true;
		                    $mail->SMTPSecure='tls';
		                    $mail->Username="AKIAVGKKEX76ZXS6Q24I";
		                    $mail->Password="BPclDev9aF1tcl2MXzND2DxHrjzLY5ufgTjz/BIRAHi9";
		                   	$mail->setFrom('noreply@digitadooh.com',"Digit-Ad");
		                    $mail->addAddress('akemshow@gmail.com');
		                    $mail->addReplyTo('noreply@digitadooh.com');
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
						//}
		            }
				}catch(Exception $e){
					print_r($e);
				}
			}
		}
	}
	
?>