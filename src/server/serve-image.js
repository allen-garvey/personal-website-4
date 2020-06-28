const fs = require('fs');
const path = require('path');

function serveImage(req, res, sourceDir){
    const mimeTypes = {
        '.jpg': 'image/jpeg',
        '.jpeg': 'image/jpeg',
        '.png': 'image/png',
        '.svg': 'image/svg+xml',
    };
    const imageName = req.params.imageName;

    fs.readFile(path.resolve(sourceDir, imageName), (err, data) => {
        if (err) throw err;
        res.setHeader('Content-Type', mimeTypes[path.extname(imageName)]);
        res.send(data);
    });
}

module.exports = serveImage;