<?php

include_once("../model/Database.php");

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

if (isset($_POST)) {

    if(isset($_POST['id'])) $storyId = $_POST["id"];
    if(isset($_POST['title'])) $storyTitle = $_POST["title"];
    if(isset($_POST['description'])) $storyDescription = $_POST["description"];

    $sql = "UPDATE stories SET `title`='$storyTitle',`description`='$storyDescription' WHERE `id`='$storyId'";

    $results = $conn->query($sql);
    if($results) echo "success";

}
