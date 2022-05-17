<?php
// CONNECT FILSE FROM PHPMAILER LIB
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

$title = "Letter subject";
// GET MODAL ITEMS FROM FETCH POST REQUEST
$jsonText =$_POST['Products'];
// DECODE ITEMS FROM JSON
$myArray = json_decode($jsonText, true);

// GET PRICE FOR ITEMS FROM FETCH POST REQUEST
$jsonPrice =$_POST['SummaryPrice'];
// DECODE PRICE FROM JSON
$myArrayPrice = json_decode($jsonPrice, true);

// CYCLE THAT CREATE A TABLE WITH ITEMS PRICE DATA
foreach ($myArrayPrice as $key => $value) {
	$title = $value["title"];
	$price = $value["price"];
	$summary .= "
	  <tr>
		  <td style='padding: 10px; border: #e9e9e9 1px solid;'>$title</td>
		  <td style='padding: 10px; border: #e9e9e9 1px solid;'>$price</td>
	  </tr>
	  ";
}

// CYCLE THAT CREATE A TABLE WITH TITLE OF ITEM, HIS NUMBERS AND PRICE
foreach ($myArray as $key => $value) {
	$title = $value["name"];
	$numbers = $value["numbers"];
	$priceForItem = $value["priceForItem"];
	$prod .= "
	  <tr>
		  <td style='padding: 10px; border: #e9e9e9 1px solid;'>$title</td>
		  <td style='padding: 10px; border: #e9e9e9 1px solid;'>$numbers</td>
		  <td style='padding: 10px; border: #e9e9e9 1px solid;'>$priceForItem</td>		
	  </tr>
	  ";
}



$c = true;
// TAKE A DATA FROM INPUTS AND CREATE A TABLE WITH NAME OF INPUT AND HIS VALUE
$title = "Заголовок письма";
foreach ( $_POST as $key => $value ) {
  if ( $value != "" && $key != "Products" && $key != "SummaryPrice") {
    $body .= "
    " . ( ($c = !$c) ? '<tr>':'<tr>') . " 
      <td style='padding: 10px; width: 100%;'><b>$key</b></td>
      <td style='padding: 10px; width: auto;'>$value</td>
    </tr>
    ";
  }
}
// FORM BODY OF LETTER
$body = "<table style='width: 50%;'>$body . $prod . $summary</table>";


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

  $mail->setFrom('isotopelegendary@gmail.com', 'NEW ORDER'); //MY ADRESS AND TITLE

  // Letter recipient
  $mail->addAddress('isotopelegendary@gmail.com');

  
  $mail->isHTML(true); // ALLOW TO USE HTML IN LETTER
  $mail->Subject = $title; //SUBJECT OF LETTER
  $mail->Body = $body; // BODY OF LETTER

//   SEND A LETTER
  $mail->send();


} catch (Exception $e) {
   $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}
