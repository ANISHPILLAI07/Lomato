<?php
// db_connect.php

$host = 'localhost';  // Change if necessary
$db_name = 'lomato_db'; // Replace with your database name
$db_user = 'root';  // Replace with your database username
$db_password = 'Synchronize1@';  // Replace with your database password

try {
    $conn = new PDO("mysql:host=$host;dbname=$db_name", $db_user, $db_password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
}
?>
