<?php
if($_POST){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    //send email
    header("Access-Control-Allow-Headers: *");
    mail("info@aurustek.ai", "Drop Us a Line" .$email, $message);
}
?>