<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Video Stream with Chat</title>
   <link rel="stylesheet" href="style.css">
</head>
<body>
   <div class="video-container">
      <video id="videoPlayer" controls autoplay></video>
   </div>
   
   <div class="chat-container">
      <h3>Live Chat</h3>
      <div id="chatBox"></div>
      <input type="text" id="chatInput" placeholder="Type your message...">
      <button onclick="sendMessage()">Send</button>
   </div>

   <button onclick="shareStream()">Share Stream</button>

   <script src="script.js"></script>
</body>
</html>
