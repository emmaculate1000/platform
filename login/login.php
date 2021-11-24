<?php
	session_start();
	//include satization script
	include('../dataCleaner.php');
	//include config file
	$configs=include('../config.php');
	if($_SERVER['REQUEST_METHOD']=='POST'){
		$email=cleaner($_POST['email']);
		$password=cleaner($_POST['password']);
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
            	$passwordX=md5(mysqli_real_escape_string($connection,$password));
            	$sql="SELECT *FROM digitad WHERE email='$emailX' AND password='$passwordX' AND active=1 LIMIT 1";
            	$query=mysqli_query($connection,$sql);
            	if(!$query){
            		throw new Exception(mysqli_error($query));	
            	}
            	if(mysqli_num_rows($query)==1){
            		$result=mysqli_fetch_assoc($query);
            		$user_id=$result['id'];
            		$first_name=ucfirst(stripslashes($result['first_name']));
            		$last_name=ucfirst(stripslashes($result['last_name']));
            		$email=ucfirst(stripslashes($result['email']));
            		$active=ucfirst($result['active']);
					$country=$result['country'];
					$companyName=$result['company_name'];
					$company_reg_num=$result['company_reg_num'];
					$company_address=$result['company_address'];
					$userAddress=$result['user_address'];
					$city=$result['city'];
					$user_position_in_company=$result['user_position_in_company'];
            		$user_info = array(
            			'id' => $user_id, 
            			'f_name'=>$first_name,
            			'l_name'=>$last_name,
            			'email'=>$email,
            			'active'=>$active,
						'country'=>$country,
						'city'=>$city,
						'companyName'=>$companyName,
						'company_reg_num'=>$company_reg_num,
						'company_address'=>$company_address,
						'user_address'=>$userAddress,
						'position_in_company'=>$user_position_in_company
            		);
            		$session_data=json_encode($user_info);
            		$_SESSION['user_info']=$session_data;
					//check if user has a wallet and create it if it doesn't exist
					$sql2="SELECT FROM wallets WHERE owner_id=$user_id";
					$result2=mysqli_query($connection,$sql2);
					if(!$result2){
						throw new Exception(mysqli_error($result2));	
					}else{
						$currentDate=date('d-m-Y');
						if(mysqli_num_rows($result2)>0){
							//wallet exists
							echo 1;
						}else{
							//create a wallet for user
							$sql3="INSERT INTO wallets(owner_id,owner_name,created) VALUES($user_id,'$email','$currentDate')";
							$result3=mysqli_query($connection,$result3);
							if(!$result3){
								throw new Exception(mysqli_error($result3));
							}else{
								echo 1;
							}
						}
					}
					//close database connection
					mysqli_close($connection);
					
            	}else{
            		echo 0;
            	}
            }else{
				echo "no";
			}

		}catch(Exception $e){
			print_r($e);
		}
	}
?>