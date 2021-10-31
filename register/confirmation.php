<?php
	session_start();
	//include satization script
	include('../dataCleaner.php');
	//include config file
	$configs=include('../config.php');
	if(isset($_GET['id'])){
        $credentials=explode('-',$_GET['id']);
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
            	$sql="UPDATE digitad SET active=1 WHERE email='$emailX' AND password='$passwordX'";
            	$query=mysqli_query($connection,$sql);
            	if(!$query){
            		$message= "<h1>FAILED TO VERIFY USER</h1>";
                    echo $message;
            	}else{
                    $message= "<h1 style='text-align:center;'>Email Verified Successfully</h1>
                    <button style='padding:10px;background-color:orange;color:white;font-size:20px;width:30%;margin:20px 35%;'>
        
                    <a href='http://digitad.us-east-2.elasticbeanstalk.com/login' style='border'>Login</a></button>";
                    echo $message;
                }
            }else{
				echo "no connection";
			}

		}catch(Exception $e){
			print_r($e);
		}
	}
?>