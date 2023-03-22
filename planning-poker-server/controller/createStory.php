<?php
include_once("../model/Database.php");

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

if(isset($_POST)){
    if (isset($_POST['title'])) $title = $_POST['title'];
    if (isset($_POST['description'])) $description = $_POST['description'];
    if (isset($_POST['sessionId'])) $sessionId = $_POST['sessionId'];

$sql = "INSERT INTO `stories`(`title`,`description`,`session_id`) VALUES('$title','$description','$sessionId')";

$result = $conn->query($sql);
if(isset($result)){
    echo "success";
}

}
