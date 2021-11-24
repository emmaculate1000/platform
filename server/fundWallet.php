<?php
    if($_SERVER['REQUEST_METHOD']=='POST'){
        if(isset($_POST['reference'])){
            $reference=$_POST['reference'];
            $method=$_POST['method'];
            $amount=$_POST['amount'];
            $user_id=$_POST['user_id'];
            $email=$_POST['email'];
            echo $amount;
        }
    }
?>