<?php
require 'db.php';
header('Content-Type: application/json');

if (isset($_GET['email'])) {
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
}
$conn->close();
?>