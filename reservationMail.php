<?php
// CONNECT FILSE FROM PHPMAILER LIB
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

$title = "Letter subject";



$c = true;
// TAKE A DATA FROM INPUTS AND CREATE A TABLE WITH NAME OF INPUT AND HIS VALUE
$title = "Заголовок письма";
foreach ( $_POST as $key => $value ) {
  if ( $value != "") {
    $body .= "
    " . ( ($c = !$c) ? '<tr>':'<tr>') . " 
      <td style='padding: 10px; width: 100%;'><b>$key</b></td>
      <td style='padding: 10px; width: 400px;'>$value</td>
    </tr>
    ";
  }
}
// FORM BODY OF LETTER
$body = "<table style='width: 50%;'>$body</table>";


// OPTIONS PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();

try {
  $mail->isSMTP(); //SIMPLE MAIL TRANSFER PROTOCOL
  $mail->CharSet = "UTF-8"; // CODING
  $mail->SMTPAuth   = true;

//  OPTIONS OF MY MAIL
  $mail->Host       = 'smtp.gmail.com'; // SMTP SERVER MY MAIL
  $mail->Username   = 'isotopelegendary@gmail.com'; // MY MAIL
  $mail->Password   = 'ldxocpryvvxqdbtl'; // MAIL PASSWORD
  $mail->SMTPSecure = 'ssl';
  $mail->Port       = 465;

  $mail->setFrom('isotopelegendary@gmail.com', 'Заявка с вашего сайта'); //MY ADRESS AND TITLE

  // Letter recipient
  $mail->addAddress('isotopelegendary@gmail.com');

  $mail->isHTML(true); // ALLOW TO USE HTML IN LETTER
  $mail->Subject = $title; //SUBJECT OF LETTER
  $mail->Body = $body; // BODY OF LETTER

//   SEND A LETTER
//   $mail->send();


//   SEND A LETTER
$mail->send();


} catch (Exception $e) {
   $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

