<?php
include('connection.php');

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

$details = $_POST['details'];

$query = $mysqli->prepare('insert into stories(details) values(?);');
$query->bind_param('s', $details);
$query->execute();
$response['status'] = "success";
$response['message'] = "story was added successfully";

echo json_encode($response);