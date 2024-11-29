<?php
// signup.php
include 'db_connect.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT); // Hash password

    $sql = "INSERT INTO users (name, phone, email, password) VALUES (:name, :phone, :email, :password)";
    $stmt = $conn->prepare($sql);

    try {
        $stmt->execute(['name' => $name, 'phone' => $phone, 'email' => $email, 'password' => $password]);
        header("Location: index.html");  // Redirect to homepage
        exit();
    } catch (PDOException $e) {
        echo "Error: " . $e->getMessage();
    }
}
?>
