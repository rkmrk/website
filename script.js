// Fetch the YouTube link from PHP
fetch("get_link.php")
   .then(response => response.text())
   .then(link => {
      document.getElementById('videoPlayer').src = `https://www.youtube.com/embed/${link}`;
   });

// AJAX for live chat
function loadChat() {
   fetch('load_chat.php')
      .then(response => response.text())
      .then(messages => {
         document.getElementById("chatBox").innerHTML = messages;
      });
}

function sendMessage() {
   const message = document.getElementById("chatInput").value;
   if (message.trim()) {
      fetch('send_chat.php', {
         method: 'POST',
         headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
         body: `message=${encodeURIComponent(message)}`
      }).then(() => {
         document.getElementById("chatInput").value = '';
         loadChat(); // Refresh chat messages
      });
   }
}

setInterval(loadChat, 3000); // Refresh chat every 3 seconds

function shareStream() {
   const shareUrl = `${window.location.href}`;
   navigator.clipboard.writeText(shareUrl).then(() => {
      alert("Shareable link copied to clipboard!");
   });
}
