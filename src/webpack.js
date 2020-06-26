const path = require('path');
const webpack = require('webpack');
const config = require('../webpack/webpack.config');

function createCompiler(fs){
    const compiler = webpack(config);
    compiler.outputFileSystem = fs;
    compiler.outputFileSystem.join = path.join.bind(path)
    return compiler;
}

module.exports = {
    createCompiler,
};