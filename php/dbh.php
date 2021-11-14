<?php


class Dbh {
//private becouse we dont want users to have acces to it
    public $servername;
    private $username;
    private $password;
    private $dbname;

//just for connection 
protected function connect(){

    $this->servername = "eu-cdbr-west-01.cleardb.com";
    $this->username = "b57a5f2109d90d";
    $this->password = "325f8389";
    $this->dbname = "heroku_319e0a0f7a8cdf0";

    //oop not proced
    $conn = new mysqli($this->servername,$this-> username,$this->password,$this->dbname);
return $conn;

}
}

?>