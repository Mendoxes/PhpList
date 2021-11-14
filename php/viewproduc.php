<?php
header("Access-Control-Allow-Origin: *");
class ViewProduct  extends Product {


public function showAllProducts(){

$datas = $this->getAllProducts();

echo json_encode($datas);
}}


