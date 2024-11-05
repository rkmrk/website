<?php
$file = fopen("youtube.txt", "r");
$link = fgets($file);
fclose($file);

// Extract YouTube video ID (assuming the link is a full YouTube URL)
parse_str(parse_url(trim($link), PHP_URL_QUERY), $query);
echo $query['v']; // Output only the video ID for embedding
?>
