<?php
    $coupons=[
        "kxy"=>10
    ];
    if($_SERVER['REQUEST_METHOD']=='POST'){
        if(isset($_POST['coupon'])){
            $coupon=$_POST['coupon'];
            if(array_key_exists($coupon,$coupons)){
                echo 'sure';
            }else{
                echo "no";
            }
        }
    }
?>