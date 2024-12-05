const port = 3000;

const { createFsFromVolume, Volume } = require('memfs');
const fs = createFsFromVolume(new Volume()).promises;
const webpackConfig = require('../webpack/webpack.config');
const webpackCompiler = require('./webpack').createCompiler(fs, webpackConfig);
const server = require('./server/index').createServer(fs, port);
const websocketConnectionsMap = new Map();
require('./websockets/websocket').websocketSetup(
    server,
    websocketConnectionsMap
);
const dateHelpers = require('./helpers/date-helpers');

const url = `http://localhost:${port}`;
server.listen(port, () => console.log(`Listening at ${url}`));

webpackCompiler.watch({}, async (err, stats) => {
    if (err) throw err;
    const info = stats.toJson();

    console.log(
        `webpack compilation complete ${dateHelpers.currentTimestampString()} in ${
            info.time / 1000
        }s websockets open: ${websocketConnectionsMap.size}`
    );

    if (stats.hasErrors()) {
        console.error(info.errors);
    }

    if (stats.hasWarnings()) {
        console.warn(info.warnings);
    }

    websocketConnectionsMap.forEach(ws => {
        ws.send('webpack recompiled');
    });
});
