<?php
class valSku extends Dbh{
    public $namez;
    public function getAllSku($namez){
        $this->namez = $namez;
    $sql = "SELECT sku FROM products WHERE sku ='$namez'";
    $result = $this->connect()->query($sql);
    $numRows = $result->num_rows;
    if(!$numRows){
      
        return "";
    }else{ return die("Sku " .$namez." is alredy taken please choose another one");};

    }
    
    
    
    }


    abstract class Val {
        public $name;
        public function __construct($name) {
          $this->name = $name;
        }
        abstract public function intro();
      }

 

      class size extends Val {
        public function intro() {
          return ' Format must contain only numbers' ;
        }
      }