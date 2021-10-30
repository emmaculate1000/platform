<?php
    if($_SERVER['REQUEST_METHOD']=='GET'){
        if(isset($_GET['user'])){
            $user=$_GET['user'];
            echo $user;
        }
    }
?>