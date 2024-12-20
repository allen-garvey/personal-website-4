const path = require('path');

const outputPath = path.resolve(__dirname, '..', 'public_html');
const imagesPath = path.resolve(__dirname, '..', 'public_html', 'images');
const iconsPath = path.resolve(imagesPath, 'icons');
const stylesOutputFilename = 'main.css';
const jsOutputFilename = 'app.js';

module.exports = {
    outputPath,
    imagesPath,
    iconsPath,
    stylesOutputFilename,
    jsOutputFilename,
};
