<?php
    $coupons=[
        "kxy"=>10
    ];
    if($_SERVER['REQUEST_METHOD']=='POST'){
        if(isset($_POST['coupon'])){
            $coupon=$_POST['coupon'];
            if(array_key_exists($coupon,$coupons)){
                $couponDiscount=$coupons[$coupon];
                echo $couponDiscount;
            }else{
                echo "no";
            }
        }
    }
?>