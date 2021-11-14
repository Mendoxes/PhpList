<?php
header("Access-Control-Allow-Origin: *");

class Set extends Dbh{

    public function saveRecords(){

$result = $this->connect();

$sql ="INSERT INTO `products` (`sku`, `name`, `price`, `attributes`) 
VALUES ('6', 'React', '200', 'book');";
      mysqli_query($result,$sql);

}}