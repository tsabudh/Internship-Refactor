<?php

include_once("../model/Database.php");

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

if (isset($_POST)) {

    if (isset($_POST['email'])) $email = $_POST['email'];
    if (isset($_POST['password'])) $password = $_POST['password'];
}



$candidateUserId = null;
$sql = "select id from `users` where `email` = '$email' ";
$results = $conn->query($sql);

$userId = null;
$userPassword = null;

if ($results->num_rows > 0) {
    while ($row = $results->fetch_assoc()) {
        // echo "id:".$row["id"];
        $userId = $row["id"];
    }
}

$sql = "select password from `users` where `id` = '$userId' ";
$results = $conn->query($sql);




if ($results->num_rows > 0) {
    while ($row = $results->fetch_assoc()) {
        // echo "password:".$row["password"];
        $userPassword = $row["password"];
    }
}


// $userPassword = password_hash($userPassword, PASSWORD_DEFAULT);
if (password_verify($password, $userPassword)) {
    // header("Location:http://127.0.0.1:5173/signup");

    $sql = "SELECT `name`,`email`,`id` from `users` where `id` = '$userId'";
    $results = $conn->query($sql);
    $user = new stdClass;

    if ($results->num_rows > 0) {
        while ($row = $results->fetch_assoc()) {
            // echo "password:".$row["password"];
            // $userPassword=$row["password"];
            $user->name = $row["name"];
            $user->id = $row["id"];
            $user->email = $row["email"];
        }
    }

    header("Content-Type: application/json");



    echo json_encode($user);
} else {
    echo json_encode('validation-failed');
}




// if ($result->num_rows > 0) {
//     // output data of each row
//     while($row = $result->fetch_assoc()) {
//       echo "id: " . $row["id"];
//     }
//   } else {
//     echo "0 results";
//   }
