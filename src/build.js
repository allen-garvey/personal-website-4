const realFs = require('fs');
const path = require('path');
const { createFsFromVolume, Volume } = require('memfs');
const fs = createFsFromVolume(new Volume());
const webpackConstants = require('../webpack/constants');
const webpack = require('./webpack');
const webpackConfig = require('../webpack/webpack.production.config');
const webpackCompiler = webpack.createCompiler(fs, webpackConfig);
const handlebars = require('../src/server/handlebars');
const home = require('../src/models/home');

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

async function outputIndex(){
    const handlebarsCompiler = handlebars.createCompiler();
    const homeContext = await home.getHomeContext(fs);
    const homeOutput = await handlebarsCompiler.render('home', homeContext);
    const indexPath = path.resolve(webpackConstants.outputPath, 'index.html');

    return new Promise((resolve, reject) => {
        realFs.writeFile(indexPath, homeOutput, (err) => {
            if (err) return reject(err);
            return resolve();
        });
    });
}

async function build(){
    await webpack.compile(webpackCompiler);
    console.log('Webpack compile complete');
    await Promise.all([outputStyles(), outputIndex()]);
    console.log(`Build ready for deploy in ${webpackConstants.outputPath}`);
}

build();