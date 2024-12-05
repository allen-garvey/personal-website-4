const path = require('path');
const webpackConstants = require('../../webpack/constants');

const { requireUncached } = require('../helpers/live-reload');

const createStaticFileHandler = (filename, mimeType, fs) => (req, res) =>
    fs
        .readFile(path.resolve(webpackConstants.outputPath, filename))
        .then(data => {
            res.setHeader('Content-Type', mimeType);
            res.send(data);
        });

function addRoutes(app, fs, websocketPort) {
    app.get('/', async (req, res) => {
        const home = requireUncached(require.resolve('../models/home'));
        const homeContext = await home.getHomeContext(websocketPort);
        return res.render('home', homeContext);
    });

    app.get(
        `/${webpackConstants.stylesOutputFilename}`,
        createStaticFileHandler(
            webpackConstants.stylesOutputFilename,
            'text/css',
            fs
        )
    );

    app.get(
        `/${webpackConstants.jsOutputFilename}`,
        createStaticFileHandler(
            webpackConstants.jsOutputFilename,
            'text/javascript',
            fs
        )
    );
}

module.exports = {
    addRoutes,
};
