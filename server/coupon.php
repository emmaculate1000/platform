<?php
    $coupons=[
        "kxy"=>10
    ];
    if($_SERVER['REQUEST_METHOD']=='POST'){
        if(isset($_POST['coupon'])){
            $coupon=$_POST['coupon'];
            if(array_key_exists($coupon,$coupons)){
                $couponDiscount=intval($coupons[$coupon]);
                $response=[
                    'success'=>1,
                    'discount'=>$couponDiscount
                ];
                echo json_encode($response);
            }else{
                $response=[
                    'success'=>0,
                    'discount'=>0
                ];
                echo json_encode($response);
            }
        }
    }
?>