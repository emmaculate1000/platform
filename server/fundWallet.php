<?php
    if($_SERVER['REQUEST_METHOD']=='POST'){
        if(isset($_POST['reference'])){
            $reference=$_POST['reference'];
            $method=$_POST['method'];
            $amount=$_POST['amount'];
            $user_id=$_POST['user_id'];
            $email=$_POST['email'];
            $walletBalance=$_POST['walletBalance'];
            $walletId=$_POST['walletId'];
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
                    echo "connected!";
                }
            }catch(Exception $e){
                print_r($e);
            }
        }
    }
?>