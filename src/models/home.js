const webpackConstants = require('../../webpack/constants');
const webpack = require('../webpack');
const { requireUncached } = require('../helpers/live-reload');

async function getHomeContext(fs, websocketPort = null) {
    const header = requireUncached(require.resolve('./header'));
    const sections = requireUncached(require.resolve('./sections'));
    const scriptContent = await webpack.getJs(fs);

    const context = {
        nav: sections.nav,
        header,
        sections,
        stylesFilename: webpackConstants.stylesOutputFilename,
        scriptContent,
    };

    if (websocketPort) {
        context.websocketPort = websocketPort;
    }

    return context;
}

module.exports = {
    getHomeContext,
};
