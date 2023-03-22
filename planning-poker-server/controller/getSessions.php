<?php

include_once("../model/Database.php");

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

if (isset($_GET)) {
    // echo json_decode(($_GET));

    if (isset($_GET["id"])) {
        $userId = $_GET["id"];
        $sql = "select id,code,name,moderator,ongoing from `sessions` where `moderator` ='$userId'";
        $results = $conn->query($sql);
        // echo json_encode($results);
        $myArray = [];
        if ($results->num_rows > 0) {
            while ($row = $results->fetch_assoc()) {
                $myObj = new stdClass();
                $myObj->id = $row['id'];
                $myObj->code = $row['code'];
                $myObj->name = $row['name'];
                $myObj->moderator = $row['moderator'];
                $myObj->ongoing = $row['ongoing'];
                array_push($myArray, $myObj);
            }
            echo json_encode($myArray);
        }
    }

    if (isset($_GET["sessionCode"])) {
        $sessionId = $_GET["sessionCode"];
        $sql = "SELECT * FROM `sessions` where `code` = '$sessionId'";
        $results = $conn->query($sql);

        if ($results->num_rows > 0) {
            while ($row = $results->fetch_assoc()) {
                $myObj = new stdClass();
                $myObj->id = $row['id'];
                $myObj->code = $row['code'];
                $myObj->name = $row['name'];
                $myObj->moderator = $row['moderator'];
                $myObj->ongoing = $row['ongoing'];

            }
            echo json_encode($myObj);
        } else {
            echo 'sessionNotFound';
        }
    }
}else{
    echo "get request not catched";
}
