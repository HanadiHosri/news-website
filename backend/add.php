<?php
include('connection.php');

$details = $_POST['details'];

$query = $mysqli->prepare('insert into stories(details) values(?);');
$query->bind_param('s', $details);
if ($query->execute()){
    $response['status'] = "success";
    $response['message'] = "story was added successfully";
} else {
    $response['status'] = "failed";
    $response['message'] = "story wasn't added";
}


echo json_encode($response);