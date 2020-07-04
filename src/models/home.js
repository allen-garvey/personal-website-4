const webpackConstants = require('../../webpack/constants');
const webpack = require('../webpack');
const sections = require('./sections');
const header = require('./header');

async function getHomeContext(fs, websocketPort=null){
    const scriptContent = await webpack.getJs(fs);

    const context = {
        header,
        sections,
        stylesFilename: webpackConstants.stylesOutputFilename,
        scriptContent,
    };

    if(websocketPort){
        context.websocketPort = websocketPort;
    }

    return context;
}

module.exports = {
    getHomeContext,
};