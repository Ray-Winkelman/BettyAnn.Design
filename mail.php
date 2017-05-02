<?php

$to  = 'info@bettyann.design';

// subject
$subject = 'Mail From www.bettyann.design';

// message
$message = ''.$_POST['name2'].' \r\n '.$_POST["message2"].' \r\n '.$_POST["phone2"];

// To send HTML mail, the Content-type header must be set
$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/plain; charset=UTF-8' . "\r\n";

// Additional headers
$headers .= 'To: info@bettyann.design' . "\r\n";
$headers .= 'From: '.$_POST['email2'].' <'.$_POST['email2'].'>' . "\r\n";
$headers .= 'Cc: raywinkelman@gmail.com' . "\r\n";

// Mail it
if (mail($to, $subject, $message, $headers)) {
    header("Location: http://bettyann.design");
    die();
} else {
    header("Location: http://bettyann.design");
    die();
}
