<?php
include('connection.php');

$query = $mysqli->prepare('select details from stories');
$query->execute();
$query->store_result();
$num_rows = $query->num_rows();

if ($num_rows == 0) {
    $response['status'] = 'no stories found';
} else {
    $stories = [];
    $query->bind_result($details);
    while ($query->fetch()) {
        $stories[] = $details;
    }
    $response['status'] = 'success';
    $response['details'] = $stories;
}

echo json_encode($response);