const path = require('path');
const webpack = require('webpack');

function createCompiler(fs, config) {
    const compiler = webpack(config);
    compiler.outputFileSystem = fs;
    compiler.outputFileSystem.join = path.join.bind(path);
    return compiler;
}

module.exports = {
    createCompiler,
};
