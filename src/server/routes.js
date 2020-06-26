const realFs = require('fs');
const path = require('path');
const webpackConstants = require('../../webpack/constants');
const sections = require('../models/sections');

function addRoutes(app, fs, websocketPort){
    app.get('/', async (req, res) => {
        return res.render('home', {
            sections,
            websocketPort,
        });
    });
    
    app.get('/assets/main.css', (req, res) => {
        fs.readFile(path.resolve(webpackConstants.assetsPath, 'main.css'), (err, data) => {
            if (err) throw err;
            res.setHeader('Content-Type', 'text/css');
            res.send(data);
        });
    });

    app.get('/assets/images/:imageName', async (req, res) => {
        const mimeTypes = {
            '.jpg': 'image/jpeg',
            '.jpeg': 'image/jpeg',
            '.png': 'image/png',
            '.svg': 'image/svg+xml',
        };
        const imageName = req.params.imageName;

        realFs.readFile(path.resolve(webpackConstants.imagesPath, imageName), (err, data) => {
            if (err) throw err;
            res.setHeader('Content-Type', mimeTypes[path.extname(imageName)]);
            res.send(data);
        });
    });
}

module.exports = {
    addRoutes,
};