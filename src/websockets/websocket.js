const WebSocket = require('ws');

function websocketSetup(server, websocketConnectionsMap){
    const wss = new WebSocket.Server({ clientTracking: false, noServer: true });
    let socketClientId = 0;

    server.on('upgrade', function (request, socket, head) {
        wss.handleUpgrade(request, socket, head, function (ws) {
            wss.emit('connection', ws, request);
        });
    });
      
    wss.on('connection', function (ws, request) {
        const id = ++socketClientId;
        websocketConnectionsMap.set(id, ws);
    
        ws.on('close', function () {
            websocketConnectionsMap.delete(id);
        });
    });
}

module.exports = {
    websocketSetup,
};