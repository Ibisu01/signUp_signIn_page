<?php
require 'db.php';


if ($_SERVER["REQUEST_METHOD"] == "GET" && isset($_GET['action']) && $_GET['action'] === 'fetch_name' && isset($_GET['email'])) {
    header('Content-Type: application/json');
    $email = filter_var(trim($_GET['email']), FILTER_SANITIZE_EMAIL);

    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $stmt = $conn->prepare("SELECT firstname FROM students_records WHERE email = ?");
        $stmt->bind_param("s", $email);
        $stmt->execute();
        $stmt->store_result();

        if ($stmt->num_rows == 1) {
            $stmt->bind_result($firstName);
            $stmt->fetch();
            echo json_encode(['success' => true, 'firstname' => $firstName]);
        } else {
            echo json_encode(['success' => false]);
        }
        $stmt->close();
    } else {
        echo json_encode(['success' => false]);
    }
    
    $conn->close();
    exit; 
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = htmlspecialchars(trim($_POST['email']));
    $password = $_POST['password'];

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email format.";
        exit;
    }

    if (empty($email) || empty($password)) {
        echo "All fields are required.";
        exit;
    }

    $stmt = $conn->prepare("SELECT id, firstname, password FROM students_records WHERE email = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $stmt->store_result();

    if ($stmt->num_rows == 1) {
        $stmt->bind_result($id, $firstName, $hashedPassword);
        $stmt->fetch();

        if (password_verify($password, $hashedPassword)) {
            echo "Sign in successful. Welcome back, $firstName!";
        } else {
            echo "Invalid email or password.";
        }
    } else {
        echo "Invalid email or password.";
    }

    $stmt->close();
    $conn->close();
} else {
    echo "Form not submitted.";
}
?>