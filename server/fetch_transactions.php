<?php
    //headers
	header('Access-Control-Allow-Methods:GET,POST');
	header('Access-Control-Allow-Headers:x-requested-with,Origin,Content-Type,X-Auth-Token,Authorization');
	header('Access-Control-Allow-Credentials:true');
    session_start();
    //database configs
    $configs=include('config.php');
    $db_host=$configs['db_configs']['host'];
    $db_user=$configs['db_configs']['user'];
    $db_password=$configs['db_configs']['password'];
    $db=$configs['db_configs']['users_db'];
    if($_SERVER['REQUEST_METHOD']=='GET'){
        if(isset($_SESSION['user_info'])){
            $user_info=json_decode($_SESSION['user_info']);
            $user_id=$user_info->id;
            try{
                $connection=mysqli_connect($db_host,$db_user,$db_password,$db);
				if(mysqli_connect_error()){
					throw new Exception(mysqli_connect_error());
				}
                if($connection){
                    $sql="SELECT *FROM transactions WHERE user_id= $user_id ORDER BY id DESC LIMIT 50";
                    $result=mysqli_query($connection,$sql);
                    if(!$result){
                        throw new Exception(mysqli_error($result));   
                    }
                    if(mysqli_num_rows($result)>0){
                        $store=[];
                        while($row=mysqli_fetch_assoc($result)){
                            $id=$row['id'];
                            $reference=$row['reference'];
                            $amount=$row['amount'];
                            $method=$row['method'];
                            $date=$row['dateOccurence'];
                            $operator=$row['operator'];
                            $status=$row['status'];
                            $data=[
                                'id'=>$id,
                                'reference'=>$reference,
                                'amount'=>$amount,
                                'method'=>$method,
                                'date'=>$date,
                                'operator'=>$operator,
                                'status'=>$status
                            ];
                            array_push( $store,$data);
                        }
                        echo json_encode($store);
                    }
                }
            }catch(Exception $e){
                print_r($e);
            }
        }else{
            echo 0;
        }
    }
?>