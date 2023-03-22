
<?php
include_once("../model/Database.php");

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header('Content-Type: application/json');

   
if (isset($_POST)) {

    // $post_data = file_get_contents('php://input');

if(isset($_POST['name']))  $name = $_POST['name'];
if(isset($_POST['email'])) $email = $_POST['email'];
if(isset($_POST['password'])) $password = $_POST['password'];
if(isset($_POST['newUser'])) $newUser = $_POST['newUser'];

$hashedPassword = password_hash($password,PASSWORD_DEFAULT);

$sql = "INSERT INTO `users`(`name`,`email`,`password`) VALUES('$name', '$email','$hashedPassword')";

$result = $conn->query($sql);
if(isset($result)){
    //redirect to login page
    header('Location: http://127.0.0.1:5173/login');

    die();
}

}

?>
