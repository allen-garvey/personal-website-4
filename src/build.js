const realFs = require('fs');
const path = require('path');
const { createFsFromVolume, Volume } = require('memfs');
const fs = createFsFromVolume(new Volume());
const webpackConstants = require('../webpack/constants');
const webpack = require('./webpack');
const webpackConfig = require('../webpack/webpack.production.config');
const webpackCompiler = webpack.createCompiler(fs, webpackConfig);

async function outputStyles(){
    const stylesPath = path.resolve(webpackConstants.outputPath, webpackConstants.stylesOutputFilename);
    return new Promise((resolve, reject) => {
        fs.readFile(stylesPath, (err, data) => {
            if (err) return reject(err);
            realFs.writeFile(stylesPath, data, (err) => {
                if (err) return reject(err);
                return resolve();
            });
        });
    });
}

async function build(){
    await webpack.compile(webpackCompiler);
    console.log('Webpack compile complete');
    Promise.all([outputStyles()]);
}

build();