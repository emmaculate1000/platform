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
                    $sql="UPDATE wallets SET balance=$walletBalance,lastTopupAmount=$amount,lastTopupDate='$created',transactionReference='$reference',transactionMethod='$method' WHERE id=$walletId AND owner_id=$user_id";
                    $result=mysqli_query($connection,$sql);
                    if(!$result){
                        throw new Exception(mysqli_error($result));   
                    }else{
                        //store transation
                        $sql2="INSERT INTO transactions(user_id,email,reference,amount,method,dateOccurence) VALUES($user_id,'$email','$reference',$amount,'$method','$created')";
                        $result2=mysqli_query($connection,$sql2);
                        if(!$result2){
                            throw new Exception(mysqli_error($result2));
                            
                        }else{
                            //send email to client
                            echo 1;
                        }

                    }
                    mysqli_close($connection);
                }
            }catch(Exception $e){
                print_r($e);
            }
        }
    }
?>