const path = require('path');
const serveImage = require('./serve-image');
const webpackConstants = require('../../webpack/constants');
const home = require('../models/home');

function addRoutes(app, fs, websocketPort) {
    app.get('/', async (req, res) => {
        const homeContext = await home.getHomeContext(fs, websocketPort);
        return res.render('home', homeContext);
    });

    app.get(`/${webpackConstants.stylesOutputFilename}`, (req, res) => {
        fs.readFile(
            path.resolve(
                webpackConstants.outputPath,
                webpackConstants.stylesOutputFilename
            ),
            (err, data) => {
                if (err) throw err;
                res.setHeader('Content-Type', 'text/css');
                res.send(data);
            }
        );
    });

    app.get('/images/icons/:imageName', (req, res) => {
        serveImage(
            req.params.imageName,
            res,
            path.resolve(webpackConstants.imagesPath, 'icons')
        );
    });

    app.get('/images/:imageName', (req, res) => {
        serveImage(req.params.imageName, res, webpackConstants.imagesPath);
    });
}

module.exports = {
    addRoutes,
};
