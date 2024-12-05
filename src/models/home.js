const webpackConstants = require('../../webpack/constants');
const { requireUncached } = require('../helpers/live-reload');

async function getHomeContext(websocketPort = null) {
    const sections = requireUncached(require.resolve('./sections'));

    const context = {
        nav: sections.nav,
        sections,
        stylesFilename: webpackConstants.stylesOutputFilename,
        scriptFilename: webpackConstants.jsOutputFilename,
    };

    if (websocketPort) {
        context.websocketPort = websocketPort;
    }

    return context;
}

module.exports = {
    getHomeContext,
};
