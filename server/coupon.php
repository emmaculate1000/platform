<?php
    $coupons=[
        "kxy"=>10
    ];
    echo 'ok';
    if($_SERVER['REQUEST_METHOD']=='GET'){
        echo 'yeah';
        if(isset($_GET['coupon'])){
            echo 'yes';
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