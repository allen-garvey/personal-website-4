const path = require('path');

const outputPath = path.resolve(__dirname, '..', 'public_html');
const assetsPath = path.resolve(__dirname, '..', 'public_html', 'assets');
const imagesPath = path.resolve(__dirname, '..', 'public_html', 'images');
const iconsPath = path.resolve(imagesPath, 'icons');

module.exports = {
    outputPath,
    assetsPath,
    imagesPath,
    iconsPath,
};