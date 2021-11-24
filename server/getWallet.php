<?php
	session_start();
	//include config file
	$configs=include('../config.php');
	if($_SERVER['REQUEST_METHOD']=='GET'){
        if(isset($_SESSION['user_info'])){
            $user_info=json_decode($_SESSION['user_info']);
            $user_id=$user_info->id;
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
                    $sql="SELECT *FROM wallets WHERE owner_id=$user_id";
                    $query=mysqli_query($connection,$sql);
                    if(!$query){
                        throw new Exception(mysqli_error($query));	
                    }
                    if(mysqli_num_rows($query)==1){
                        $result=mysqli_fetch_assoc($query);
                        $wallet_id=$result['id'];
                        $balance=$result['balance'];
                        $wallet_info = array(
                            'success'=>1,
                            'id' =>$wallet_id,
                            'balance'=>$balance
                        );
                        $wallet_data=json_encode($wallet_info);
                        echo $wallet_data;
                    }
                    mysqli_close($connection);
                }else{
                    echo 0;
                }

            }catch(Exception $e){
                print_r($e);
            }
        }
		
	}
?>