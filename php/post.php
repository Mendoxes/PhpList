<?php
// include "dbh.php";
require_once('validation.php');
header("Access-Control-Allow-Origin: *");





class Post extends Dbh{

    public function setProduct(){

$result = $this->connect();
$recText =$_POST["text"];
$recText2 =$_POST["nur"];
$recText3 =$_POST["attr"];
$recText4 =$_POST["sku"];
$recText5 = $_POST["size"];
$recText6 = $_POST["width"];
$recText7 = $_POST["length"];



$email = 'example@email.com';
    $username = 'admin';
    $password = 'Wdsasdt12';
    $age = 29;
    
    $val = new Validation();
    // $val->name('email')->value($email)->pattern('email')->required();
    // $val->name("name")->value($recText4)->pattern('alpha')->required();
    $val->name("price")->value($recText2)->pattern('float')->required();
    $val->name('age')->value($age)->min(18)->max(40);
    
    if($val->isSuccess()){
        if(!empty($recText5)){
        $query ="INSERT INTO `products` (`sku`, `name`, `price`, `attributes`) 
        VALUES ('$recText4','$recText2', '$recText','$recText5');";
        if(mysqli_query($result,$query)){
            echo "Data succes";
        }
        else{
        
           
        }}
    }else{
    	
        echo $val->displayErrors();

        // echo $val->name;
        
    }











}




}



