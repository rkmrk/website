<?php
$file = fopen("youtube.txt", "r");
$link = fgets($file);
fclose($file);
echo $link;
?>
