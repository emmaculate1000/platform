<?php
    $coupons=[
        "kxy"=>10
    ];
    if($_SERVER['REQUEST_METHOD']=='POST'){
        if(isset($_POST['coupon'])){
            echo 'yes';
            $coupon=$_POST['coupon'];
            echo $coupon;
            if(in_array($coupon,$coupons)){
                echo 'sure';
            }else{
                echo 'no';
            }
        }
    }
?>