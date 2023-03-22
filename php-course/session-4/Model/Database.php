<?php
class Database
{
   private $host = "localhost";
   private $database_name = "rest_api";
   private $username = "root";
   private $password = "";
   public $conn;
   public function createConnection()
   {
      $this->conn = null;
      try {
         $this->conn = mysqli_connect($this->host, $this->username, $this->password, $this->database_name);
      } catch (void) {
         echo "Database not connected: ";
      }
      return $this->conn;
   }
}
$db = new Database();
$conn = $db->createConnection();