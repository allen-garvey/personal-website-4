const path = require('path');
const webpack = require('webpack');
const webpackConstants = require('../webpack/constants');

function createCompiler(fs, config){
    const compiler = webpack(config);
    compiler.outputFileSystem = fs;
    compiler.outputFileSystem.join = path.join.bind(path)
    return compiler;
}

async function getJs(fs){
    return new Promise((resolve, reject) => {
        fs.readFile(path.resolve(webpackConstants.jsOutputPath, webpackConstants.jsOutputFilename), (err, data) => {
            if (err) return reject(err);
            resolve(data);
        });
    });
}

async function compile(compiler){
    return new Promise((resolve, reject) => {
        compiler.run((err, stats) => { 
            if (err) return reject(err);
            return resolve(stats);
        });
    });
}

module.exports = {
    createCompiler,
    getJs,
    compile,
};