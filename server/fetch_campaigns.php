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
                    //$sql="SELECT *FROM digit_ad_campaign_store WHERE user_id= $user_id";
                    $sql="SELECT displays FROM digit_ad_campaign_store";
                    $result=mysqli_query($connection,$sql);
                    if(!$result){
                        throw new Exception(mysqli_error($result));   
                    }
                    if(mysqli_num_rows($result)>0){
                        $store=[];
                        $row=mysqli_fetch_assoc($result);
                       /* while($row=mysqli_fetch_assoc($result)){
                            $paid=$row['paid'];
                            $campaignName=$row['campaign_name'];
                            $campaignDate=json_decode($row['campaignDate']);
                            $capacity=$row['capacity'];
                            $cost=$row['cost'];
                            $country=$row['country'];
                            $displays=json_decode($row['displays']);
                            $endDate=$row['end_date'];
                            $startDate=$row['start_date'];
                            $id=$row['id'];
                            $media=$row['media'];
                            $mediaType=$row['media_type'];
                            $multiplyConstant=$row['multiplyConstant'];
                            $numberOfDays=$row['numberOfDays'];
                            $numberOfScreens=$row['numberOfScreens'];
                            $approved=$row['approved'];
                            $user_id=$row['user_id'];
                            $created=$row['created'];
                            $user_name=$row['user_name'];
                            $duration=$row['duration'];
                            $fSize=$row['fsize'];
                            $media_for_user=$row['media_for_user'];
                            $data=[
                                'paid'=>$paid,
                                'approved'=>$approved,
                                'campaignName'=>$campaignName,
                                'campaignDate'=>$campaignDate,
                                'campaignCapacity'=>$capacity,
                                'campaignCost'=>$cost,
                                'campaignCountry'=>$country,
                                'campaignDisplays'=>$displays,
                                'startDate'=>$startDate,
                                'endDate'=>$endDate,
                                'id'=>$id,
                                'campaignMedia'=>$media,
                                'mediaType'=>$mediaType,
                                'multiplyConstant'=>$multiplyConstant,
                                'numberOfDays'=>$numberOfDays,
                                'numberOfScreens'=>$numberOfScreens,
                                'user_id'=>$user_id,
                                'created'=>$created,
                                'user_name'=>$user_name,
                                'fSize'=>$fSize,
                                'duration'=>$duration,
                                'media_for_user'=>$media_for_user
                            ];
                            array_push( $store,$data);
                        }*/
                        echo json_encode($row);
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