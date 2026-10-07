<?php
require 'db.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $firstname = htmlspecialchars(trim($_POST['firstname'] ?? ''));
    $middlename = htmlspecialchars(trim($_POST['middlename'] ?? ''));
    $lastname = htmlspecialchars(trim($_POST['lastname'] ?? ''));
    $phonenumber = htmlspecialchars(trim($_POST['phonenumber'] ?? ''));
    $email = htmlspecialchars(trim($_POST['email'] ?? ''));
    $password = $_POST['password'] ?? '';
    $address = htmlspecialchars(trim($_POST['address'] ?? ''));
    $nationality = htmlspecialchars(trim($_POST['nationality'] ?? ''));
    $state_of_origin = htmlspecialchars(trim($_POST['state_of_origin'] ?? ''));
    $bloodgroup = htmlspecialchars(trim($_POST['bloodgroup'] ?? ''));
    $genotype = htmlspecialchars(trim($_POST['genotype'] ?? ''));

    if (empty($firstname) || empty($lastname) || empty($phonenumber) || empty($email) || 
        empty($password) || empty($address) || empty($nationality) || 
        empty($state_of_origin) || empty($bloodgroup) || empty($genotype)) {
        echo "All fields except Middle Name are required.";
        exit;
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email format.";
        exit;
    }

    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

    $stmt = $conn->prepare("SELECT id FROM students_records WHERE email = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $stmt->store_result();

    if ($stmt->num_rows > 0) {
        echo "Email is already registered.";
        $stmt->close();
        $conn->close();
        exit;
    }
    $stmt->close();

    $stmt = $conn->prepare("INSERT INTO students_records (firstname, middlename, lastname, phonenumber, email, password, address, nationality, state_of_origin, bloodgroup, genotype) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("sssssssssss", $firstname, $middlename, $lastname, $phonenumber, $email, $hashedPassword, $address, $nationality, $state_of_origin, $bloodgroup, $genotype);

    if ($stmt->execute()) {
        header("Location: signin.html");
        exit;
    } else {
        echo "Error: " . $stmt->error;
    }

    $stmt->close();
    $conn->close();
} else {
    echo "Form not submitted.";
}
?>