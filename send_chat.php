<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
   $message = strip_tags($_POST['message']); // Prevent HTML injection
   $timestamp = date("H:i");
   $chatFile = "chat.txt";
   $entry = "[" . $timestamp . "] " . $message . "\n";
   file_put_contents($chatFile, $entry, FILE_APPEND | LOCK_EX);
}
?>
