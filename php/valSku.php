<?php
include "dbh.php";
header("Access-Control-Allow-Origin: *");
class valSku extends Dbh{

    public function getAllSku(){
    
    $sql = "SELECT sku FROM products WHERE sku ='seba'";
    $result = $this->connect()->query($sql);
    $numRows = $result->num_rows;
    if($numRows >0){
        while($row =$result->fetch_assoc()){
    
            $data[]= $row;
        }
        return json_encode($data);
    }

    }
    
    
    
    }

    $products = new valSku();
    echo $products->getAllSku();