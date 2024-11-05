// Load a YouTube link from youtube.txt
fetch("get_link.php")
   .then(response => response.text())
   .then(link => {
      const videoPlayer = document.getElementById('videoPlayer');
      videoPlayer.src = link; // Link will be a streamable YouTube URL
   });

// WebSocket for live chat
const chatSocket = new WebSocket("ws://yourserver.com:3000");

chatSocket.onmessage = function(event) {
   const chatBox = document.getElementById("chatBox");
   chatBox.innerHTML += `<p>${event.data}</p>`;
};

function sendMessage() {
   const message = document.getElementById("chatInput").value;
   chatSocket.send(message);
}

function shareStream() {
   const shareUrl = `${window.location.href}?stream=${encodeURIComponent(videoPlayer.src)}`;
   navigator.clipboard.writeText(shareUrl).then(() => {
      alert("Shareable link copied!");
   });
}
