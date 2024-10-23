const fs = require('fs');
const path = require('path');

function serveImage(imageName, res, sourceDir) {
    const mimeTypes = {
        '.jpg': 'image/jpeg',
        '.jpeg': 'image/jpeg',
        '.png': 'image/png',
        '.svg': 'image/svg+xml',
        '.webp': 'image/webp',
    };

    fs.readFile(path.resolve(sourceDir, imageName), (err, data) => {
        if (err) throw err;
        res.setHeader('Content-Type', mimeTypes[path.extname(imageName)]);
        res.send(data);
    });
}

module.exports = serveImage;
