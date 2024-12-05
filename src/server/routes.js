const path = require('path');
const webpackConstants = require('../../webpack/constants');

const { requireUncached } = require('../helpers/live-reload');

function addRoutes(app, fs, websocketPort) {
    app.get('/', async (req, res) => {
        const home = requireUncached(require.resolve('../models/home'));
        const homeContext = await home.getHomeContext(fs, websocketPort);
        return res.render('home', homeContext);
    });

    app.get(`/${webpackConstants.stylesOutputFilename}`, (req, res) =>
        fs
            .readFile(
                path.resolve(
                    webpackConstants.outputPath,
                    webpackConstants.stylesOutputFilename
                )
            )
            .then(data => {
                res.setHeader('Content-Type', 'text/css');
                res.send(data);
            })
    );
}

module.exports = {
    addRoutes,
};
