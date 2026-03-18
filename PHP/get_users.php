<?php

$host = "127.0.0.61";
$user = "root";
$password = "root";
$database = "accounts";

$conn = new mysqli($host, $user, $password, $database);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT username FROM users";
$result = $conn->query($sql);

$users = [];

while ($row = $result->fetch_assoc()) {
    $users[$row["username"]] = ($row);
}

header('Content-Type: application/json');
echo json_encode($users);

$conn->close();

?>