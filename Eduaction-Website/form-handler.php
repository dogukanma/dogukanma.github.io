<?php
$name = $_POST['name'];
$visitor_email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

$email_from = "info@eduaction.com";

$email_subject = "New from submission";

$email_body = "
  Subject: $subject \n
  Username: $name \n 
  Email: $visitor_email \n
  Message: $message
";

$to = "yebov54614@eazenity.com";

$headers = "From: $email_from \r\n";
$headers .= "Reply to: $visitor_email \r\n";

mail($to, $email_subject, $email_body, $headers);
header("Location: contact.html")

?>