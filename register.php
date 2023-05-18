<?php
// Assuming you have a MySQL database set up with a table called "homes"
// with columns: id (auto-increment), name, city, price, description

// Retrieve the form data
$name = $_POST['name'];
$city = $_POST['city'];
$price = $_POST['price'];
$description = $_POST['description'];

// Connect to the database
$servername = "localhost";
$username = "your_username";
$password = "your_password";
$dbname = "your_database_name";

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// Insert the home details into the database
$sql = "INSERT INTO homes (name, city, price, description)
        VALUES ('$name', '$city', '$price', '$description')";

if ($conn->query($sql) === TRUE) {
  echo "Home registered successfully";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
