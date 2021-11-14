<?php

class Delete extends Dbh{

    public function deleteProduct(){

$result = $this->connect();



$parts = explode(',', $_POST["columns"]);

foreach($parts as $id){

    echo $id;

    $query = "DELETE FROM `products` WHERE `sku`='$id'";
    if(mysqli_query($result,$query)){
        echo "Data succes";
    }
    else{
        echo "connection problem";
    }
   
};





if(mysqli_query($result,$query)){
    echo "Data succes";
}
else{
    echo "connection problem";
}

}




}