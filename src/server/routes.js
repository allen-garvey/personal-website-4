const path = require('path');
const webpackConstants = require('../../webpack/constants');

const { requireUncached } = require('../helpers/live-reload');

const createStaticFileHandler = (filename, mimeType, fs) => (req, res) =>
    fs
        .readFile(path.resolve(webpackConstants.outputPath, filename))
        .catch(error => {
            if (error.code === 'ENOENT') {
                res.sendStatus(404);
            } else {
                console.error(error);
            }
            throw error;
        })
        .then(
            data => {
                if (data === null) {
                    return;
                }
                res.setHeader('Content-Type', mimeType);
                res.send(data);
            },
            () => {}
        );

function addRoutes(app, fs, websocketPort) {
    app.get('/', async (req, res) => {
        const home = requireUncached(require.resolve('../models/home'));
        const homeContext = home.getHomeContext(websocketPort);
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
