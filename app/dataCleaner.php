<?php
	//function to clean inputs
	function cleaner($data){
		$data=trim($data);
		$data=htmlentities($data);
		$data=stripslashes($data);
		return $data;
	}
	//add magic quotes
	function magic_quotes($data){
		//check if magic quotes is enabled
		if(!get_magic_quotes_gpc()){
			$data=addslashes($data);
		}else{
			$data=$data;
		}
		return $data;
	} 
	
?>