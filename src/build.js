const path = require('path');
const fs = require('fs/promises');
const webpackConstants = require('../webpack/constants');
const handlebars = require('../src/server/handlebars');
const home = require('../src/models/home');

async function outputIndex() {
    const handlebarsCompiler = handlebars.createCompiler();
    const viewsPath = path.resolve(__dirname, '..', 'views');
    const homeTemplatePath = path.resolve(viewsPath, 'home.hbs');
    const layoutTemplatePath = path.resolve(
        viewsPath,
        'layouts',
        `${handlebarsCompiler.defaultLayout}.hbs`
    );

    const homeContext = await home.getHomeContext();
    const body = await handlebarsCompiler.render(homeTemplatePath, homeContext);
    const layoutContext = Object.assign({}, homeContext, { body });
    const homeHtml = await handlebarsCompiler.render(
        layoutTemplatePath,
        layoutContext
    );
    const indexPath = path.resolve(webpackConstants.outputPath, 'index.html');

    return fs.writeFile(indexPath, homeHtml);
}

async function build() {
    try {
        await outputIndex();
        console.log(`Build ready for deploy in ${webpackConstants.outputPath}`);
    } catch (error) {
        console.error(error);
    }
}

build();
