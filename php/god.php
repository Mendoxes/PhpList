<?php
// Parent class
header("Access-Control-Allow-Origin: *");
abstract class Car {
  public $name;
  public function __construct($name) {
    $this->name = $name;
  }
  abstract public function intro();
}

// Child classes
class Book extends Car {
  public function intro() {
    return array($this->name,0,"weight");
  }
}

class Dvd extends Car {
  public function intro() {
    return array($this->name,0,"size");
  }
}

class Furniture extends Car {
  public function intro()  {
    return array($this->name,1,"height","width","length");
  }

}

// Create objects from the child classes

class valSku extends Dbh{
    public $namez;
    public function getAllSku($namez){
        $this->namez = $namez;
    $sql = "SELECT sku FROM products WHERE sku ='$namez'";
    $result = $this->connect()->query($sql);
    $numRows = $result->num_rows;
    if(!$numRows){
      
        return "";
    }else{ return "Sku " .$namez." is alredy taken please choose another one";};

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


?>