<?php

include_once("../model/Database.php");

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

if (isset($_GET)) {
  
    if (isset($_GET['sessionId'])) {
        $sessionId = $_GET['sessionId'];
        $sql = "SELECT * from `stories` where `session_id` = '$sessionId'";

        $results = $conn->query($sql);
        $storyArray = [];
        if ($results && $results->num_rows > 0) {
            while ($row = $results->fetch_assoc()) {
                $myObj = new stdClass();
                $myObj->id = $row['id'];
                $myObj->points = $row['points'];
                $myObj->title = $row['title'];
                $myObj->description = $row['description'];
                $myObj->sessionId = $row['session_id'];
                array_push($storyArray, $myObj);
            }
            echo json_encode(($storyArray));
        } else {
            echo "resultsNull";
        }
    }
} else {
    echo "requestNotCatched";
}
