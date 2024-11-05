const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 3000 });

wss.on('connection', function(ws) {
   ws.on('message', function(message) {
      wss.clients.forEach(function(client) {
         if (client.readyState === WebSocket.OPEN) {
            client.send(message);
         }
      });
   });
});
