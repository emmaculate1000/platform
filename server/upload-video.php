<?php
    session_start();
    //error_reporting(0);
    $errors=[];
    //include file to process upload
	include('upload_processor.php');
	//file containing processing functions
    include("../processing_functions.php");
    //data sanitizer
    include('../dataCleaner.php');
    //database configs
    $configs=include('../config.php');
    if($_SERVER['REQUEST_METHOD']=='POST'){
        if(isset($_SESSION['loged_in_user_id'])){
            $owner_id=$_SESSION['loged_in_user_id'];
            $title=cleaner($_POST["title"]);
            $category=cleaner($_POST["category"]);
            $artists=cleaner($_POST["artists"]);
            if(empty($title) or empty($category) or empty($artists)){
                 array_push($errors,2);
            }
            if(empty($owner_id)){
                array_push($errors,4);
            }
            $description=cleaner($_POST["description"]);
            if(isset($_FILES['video']['name']) AND isset($_FILES['poster']['name'])){
                //upload video
                $video=$_FILES['video'];
                $video_name=$_FILES['video']['name'];
                $video_folder="app-videos/";
                if($video['size']<=500000000){
                    $video_file=video_uploader($video,$video_name,$video_folder);
                }else{
                    array_push($errors,3);
                }
                //upload poster
                $poster=$_FILES['poster'];
                $poster_name=$_FILES['poster']['name'];
                $poster_folder="video-posters/";
                $poster_file=uploader($poster_name,$poster,$poster_folder);
                imageRotator($poster_file,$poster_name,$poster_folder);
                //call function to resize picture if size >=1mb
                if($poster['size']>=500000){
                    $poster_uploaded_file=photoResizer($poster_name,$poster_file,$poster_folder);
                }else{
                    $poster_uploaded_file=$poster_file;
                }
                if(file_exists($video_file) AND file_exists($poster_uploaded_file) AND count($errors)==0){
                    store_media($video_file,$poster_uploaded_file);
                }else{
                    echo $errors[0];
                }
                
            }
        }   
    }
    function store_media($video_file,$poster){
        global $title,$category,$configs,$description,$artists,$owner_id;
        $db_host=$configs['db_configs']['host'];
        $db_user=$configs['db_configs']['user'];
        $db_password=$configs['db_configs']['password'];
        $db=$configs['db_configs']['users_db'];
        try{
            $connection=mysqli_connect($db_host,$db_user,$db_password,$db);
            if(mysqli_connect_error()){
                throw new Exception(mysqli_connect_error());
            }
            if($connection){
                $titleX=mysqli_real_escape_string($connection,magic_quotes($title));
                $artistsX=mysqli_real_escape_string($connection,magic_quotes($artists));
                $categoryX=mysqli_real_escape_string($connection,magic_quotes($category));
                $descriptionX=mysqli_real_escape_string($connection,magic_quotes($description));
                $date=date("d/m/Y h:i:s a");
                $sql="INSERT INTO video_clips(url,title,description,category,poster,artists,owner_id,upload_date) VALUES('$video_file','$titleX','$descriptionX','$categoryX','$poster','$artistsX',$owner_id,'$date')";
                $result=mysqli_query($connection,$sql);
                if(!$result){
                    throw new Exception(mysqli_error($result));
                }
                if($result){
                    echo 1;
                }
            }
        }catch(Exception $e){
            print_r($e);
        }
    }
?>