const expressSetup = require('./express-setup');
const http = require('http');
const routes = require('./routes');

function createServer(fs, websocketPort){
    const app = expressSetup.createServer();
    routes.addRoutes(app, fs, websocketPort);
    return http.createServer(app);
}

module.exports = {
    createServer,
};