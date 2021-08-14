<?php
	header('Access-Control-Allow-Origin:http://localhost:8080');
	header('Access-Control-Allow-Methods:GET,POST');
	header('Access-Control-Allow-Headers:x-requested-with,Origin,Content-Type,X-Auth-Token,Authorization');
	header('Access-Control-Allow-Credentials:true');
	include('dataCleaner.php');
	//file containing processing functions
	if(isset($_POST['data'])){
	 	$details=json_decode($_POST['data']);
        $filed_num=$details->field_num;
        $dataX=cleaner($details->update);
		$user_id=$_POST['user_id'];
        db_store($dataX,$filed_num,$user_id);	
	}
	function db_store($data,$filed_num,$user_id){
		$updated=date("d-m-Y");
		//database configs
		$configs=include('config.php');
		$db_host=$configs['db_configs']['host'];
        $db_user=$configs['db_configs']['user'];
        $db_password=$configs['db_configs']['password'];
        $db=$configs['db_configs']['users_db'];
		//connect to database
        try{
            $connection=mysqli_connect($db_host,$db_user,$db_password,$db);
            if(mysqli_connect_error()){
                throw new Exception(mysqli_connect_error());
            }
            if($connection){
                //escape string
                $dataX=mysqli_real_escape_string($connection,$data);
                switch($filed_num){
                    case '1':
                        $sql="UPDATE digitad SET email='$dataX',updated='$updated' WHERE id='$user_id'";
                    break;
                    case '2':
                        $sql="UPDATE digitad SET country='$dataX',updated='$updated' WHERE id='$user_id'";
                    break;
                    case '3':
                        $sql="UPDATE digitad SET user_address='$dataX',updated='$updated' WHERE id='$user_id'";
                    break;
                    case '4':
                        $sql="UPDATE digitad SET company_name='$dataX',updated='$updated' WHERE id='$user_id'";
                    break;
                    case '5':
                        $sql="UPDATE digitad SET company_address='$dataX',updated='$updated' WHERE id='$user_id'";
                    break;
                    case '6':
                        $sql="UPDATE digitad SET company_reg_num='$dataX',updated='$updated' WHERE id='$user_id'";
                    break;
                    case '7':
                        $sql="UPDATE digitad SET user_position_in_company='$dataX',updated='$updated' WHERE id='$user_id'";
                    break;
                    case '8':
                        $sql="UPDATE digitad SET city='$dataX',updated='$updated' WHERE id='$user_id'";
                    break;
                }
                //sql string  
                $result=mysqli_query($connection,$sql);
                if($result){
                    echo 1;	
                }else{
                    throw new Exception(mysqli_error($result));
                }
                mysqli_close($connection);
            }
        }catch(Exception $e){
            print_r($e);
        }
	}
	
?>