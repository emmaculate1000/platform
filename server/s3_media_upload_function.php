<?php
    function uploader($file,$path){
        $filename=$file['name'];
        //import aws-s3-config
        include('aws-config.php');
        //chage filename to lowercase
		$newFileName=strtolower(basename($filename));
		$temporalName=explode(".",$newFileName);
		$final_file_Name=round(microtime(true)). ".". end($temporalName);
        $tmpfile = $file['tmp_name'];
		$fileSize=$file['size'];
		$allowedExtensions=['jpg','png','wbmp','jpeg','gif','JPG','PNG','JPEG','GIF'];
		//explode string and get file extension
		$extension1=explode('.', $newFileName);
		//get end of string
		$extension2=end($extension1);
        if(in_array($extension2, $allowedExtensions)){
			if (defined('AWS_S3_URL')) {
                // Persist to AWS S3 and delete uploaded file
                require_once('s3.php');
                S3::setAuth(AWS_S3_KEY, AWS_S3_SECRET);
               // S3::setRegion(AWS_S3_REGION);
               // S3::setSignatureVersion('v4');
                S3::putObject(S3::inputFile($tmpfile), AWS_S3_BUCKET, $path.$final_file_Name, S3::ACL_PUBLIC_READ);
                unlink($tmpfile);
                echo "done";
            } else {
                // Persist to disk
                ///$path = 'path/to/user/files/'.$file;
                //move_uploaded_file($tmpfile, $path);
                echo "failed";
            }
		}
        
    }
?>