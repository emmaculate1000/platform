<?php
	session_start();
	//include config file
	if(isset($_GET['id'])){
        //create a data reset session
		if(isset($_SESSION['reset_credentials'])){
			$_SESSION['reset_credentials']=$_GET['id'];
		}else{
			$_SESSION['reset_credentials']=$_GET['id'];
		}
		header('location:https://app.digitadooh.com/forgot password/reset.html');
	}
?>