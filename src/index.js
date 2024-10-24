const port = 3000;

const { createFsFromVolume, Volume } = require('memfs');
const fs = createFsFromVolume(new Volume());
const webpackConfig = require('../webpack/webpack.config');
const webpackCompiler = require('./webpack').createCompiler(fs, webpackConfig);
const server = require('./server/index').createServer(fs, port);
const websocketConnectionsMap = new Map();
require('./websockets/websocket').websocketSetup(
    server,
    websocketConnectionsMap
);
const dateHelpers = require('./helpers/date-helpers');

let serverStarted = false;

webpackCompiler.watch({}, async (err, stats) => {
    if (err) throw err;
    console.log(
        `webpack compilation complete ${dateHelpers.currentTimestampString()} websockets open: ${
            websocketConnectionsMap.size
        }`
    );

    const info = stats.toJson();

    if (stats.hasErrors()) {
        console.error(info.errors);
    }

    if (stats.hasWarnings()) {
        console.warn(info.warnings);
    }

    if (!serverStarted) {
        serverStarted = true;
        const url = `http://localhost:${port}`;
        server.listen(port, () => console.log(`Listening at ${url}`));
    } else {
        websocketConnectionsMap.forEach((ws) => {
            ws.send('webpack recompiled');
        });
    }
});
