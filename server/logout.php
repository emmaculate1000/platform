<?php
	//ini_set('session.cookie_domain','localhost:8080');
	header('Access-Control-Allow-Methods:GET,POST');
	header('Access-Control-Allow-Headers:x-requested-with');
	header('Access-Control-Allow-Credentials:true');
	session_start();
	if(isset($_SESSION['user_info'])){
		$user_info=$_SESSION['user_info'];
		unset($user_info);
        session_destroy();
        echo 1;
	}else{
		echo 0;
	}
?>