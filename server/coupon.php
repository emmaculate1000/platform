<?php
    $coupons=[
        "kxy"=>10
    ];
    if($_SERVER['REQUEST_METHOD']=='GET'){
        if(isset($_GET['coupon'])){
            $coupon=$_GET['coupon'];
            echo $coupon;
            /*if(in_array($coupon,$coupons)){
                echo 'yes';
            }else{
                echo 'no';
            }*/
        }
    }
?>