<?php
    if($_SERVER['REQUEST_METHOD']=='POST'){
        if(isset($_GET['user'])){
            $user=$_GET['user'];
            echo $user;
        }
    }
?>