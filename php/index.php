


<?php

include "./dbh.php";
include "./product.php";
include "./viewproduc.php";
include "./set.php";
include "./post.php";
// include "try.php";
header("Access-Control-Allow-Origin: *");



$products = new ViewProduct();
$products->showAllProducts();




?>
