<?php
    //headers
    header('Access-Control-Allow-Origin:http://localhost:8080');
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
        try{
            $connection=mysqli_connect($db_host,$db_user,$db_password,$db);
            if(mysqli_connect_error()){
                throw new Exception(mysqli_connect_error());
            }
            if($connection){
                $sql="SELECT *FROM digit_ad_campaign_store ORDER BY id DESC LIMIT 500";
                $result=mysqli_query($connection,$sql);
                if(!$result){
                    throw new Exception(mysqli_error($result));   
                }
                if(mysqli_num_rows($result)>0){
                    $store=[];
                    while($row=mysqli_fetch_assoc($result)){
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
                        $media=$row['media'];//$mediaType=='image/jpg'||$mediaType=='image/png'||$mediaType=='image/gif'?"http://localhost/digit-ad2/src/assets/campaign_images/".$row['media']:"http://localhost/digit-ad2/src/assets/campaign_videos/".$row['media'];
                        $mediaType=$row['media_type'];
                        $multiplyConstant=$row['multiplyConstant'];
                        $numberOfDays=$row['numberOfDays'];
                        $numberOfScreens=$row['numberOfScreens'];
                        $deployed=$row['deployed'];
                        //use ternary operator to decide if a campaign is approved
                        $approved=$row['approved']==1?true:false;
                        $user_id=$row['user_id'];
                        $created=$row['created'];
                        $user_name=$row['user_name'];
                        $played=$row['played'];
                        $runStart=$row['runStart'];
                        $runEnd=$row['runEnd'];
                        $numPlayedDays=$row['numPlayedDays'];
                        $data=[
                            'id'=>$id,
                            'name'=>$campaignName,
                            'numDays'=>$numberOfDays,
                            'media'=>$media,
                            'paid'=>$paid,
                            'cost'=>$cost,
                            'approve'=> $approved,
                            'createdAt'=>$created,
                            'campaignCapacity'=>$capacity,
                            'campaignCountry'=>$country,
                            'campaignDisplays'=>$displays,
                            'startDate'=>$startDate,
                            'endDate'=>$endDate,
                            'mediaType'=>$mediaType,
                            'multiplyConstant'=>$multiplyConstant,
                            'numberOfScreens'=>$numberOfScreens,
                            'user_id'=>$user_id,
                            'user_name'=>$user_name,
                            'deployed'=>$deployed,
                            'played'=>$played,
                            'runStart'=>$runStart,
                            'runEnd'=>$runEnd,
                            'numPlayedDays'=>$numPlayedDays
                        ];
                        array_push( $store,$data);
                    }
                    echo json_encode($store);
                }
            }
        }catch(Exception $e){
            print_r($e);
        }
    }
?>