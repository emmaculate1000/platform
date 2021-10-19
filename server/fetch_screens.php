<?php
	if($_SERVER['REQUEST_METHOD']=='GET'){
		$configs=include('../../config.php');
		try{
			//connect to datatbase
		    $db_host=$configs['db_configs']['host'];
	        $db_user=$configs['db_configs']['user'];
	        $db_password=$configs['db_configs']['password'];
	        $db=$configs['db_configs']['users_db'];
	        $connection=mysqli_connect($db_host,$db_user,$db_password,$db);
	        if($connection){
	        	$sql="SELECT *FROM  city_screens_info";
				$result=mysqli_query($connection,$sql);
				if(!$result){
					throw new Exception(mysqli_error($result));	
				}
				if(mysqli_num_rows($result)>0){
					$screens_info=[];
					while($row=mysqli_fetch_assoc($result)){
						$city=$row['city'];
						$latitude=$row['latitude'];
						$longitude=$row['longitude'];
						$screen_name=$row['screen_name'];
						$resolution=$row['resolution'];
						$location=$row['location'];
						$country=$row['country'];
						$gdp=$row['country_gdp'];
						$price_per_day=$row['price'];
						$population=$row['population'];
						$state=$row['state'];
						$playlist=$row['playlist'];
						$screen_data=[
							'country'=>$country,
							'city'=>$city,
							'latitude'=>$latitude,
							'longitude'=>$longitude,
							'screen_name'=>$screen_name,
							'resolution'=>$resolution,
							'location'=>$location,
							'gdp'=>$gdp,
							'price_per_day'=>$price_per_day,
							'population'=>$population,
							'state'=>$state,
							'playlist'=>$playlist
						];
						array_push($screens_info,$screen_data);
					}
					echo json_encode($screens_info);
				}
	        }
		}catch(Exception $e){
			print_r($e);
		}
	}
?>