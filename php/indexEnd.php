<?php

include "dbh.php";
include "newSkul.php";
include "end.php";

// include "valSku.php";
header("Access-Control-Allow-Origin: *");




    $products = new valSku();
    echo $products->getAllSku($_POST["sku"]);

$ok2 =new $_POST["type"]();
$ok2 ->setProduct();
