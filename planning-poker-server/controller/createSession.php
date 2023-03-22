<?php
include_once("../model/Database.php");

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

$sessionName = "";
$moderator = "";

if (isset($_POST)) {
    if (isset($_POST['sessionName'])) $sessionName = $_POST["sessionName"];
    if (isset($_POST['currentUser'])) $moderator = $_POST["currentUser"];
    $code = uniqid($moderator);

    $sql = "INSERT INTO `sessions` (`name`,`code`,`moderator`) VALUES('$sessionName','$code','$moderator')";
    // echo json_encode($sessionName);
    // echo json_encode($moderator);
    $result = $conn->query($sql);

    if (isset($result)) {
        $sql = "SELECT `name`,`id`,`code`,`moderator` from `sessions` where code='$code'";
        $results = $conn->query($sql);
        if ($results->num_rows > 0) {
            while ($row = $results->fetch_assoc()) {
                $myObj = new stdClass();
                $myObj->id = $row['id'];
                $myObj->name = $row['name'];
                $myObj->moderator = $row['moderator'];
                $myObj->code = $row['code'];
                $myObj->stories = [];
            }
            echo json_encode($myObj);
        }
    }
}
