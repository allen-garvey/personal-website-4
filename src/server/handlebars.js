const exphbs = require('express-handlebars');
const path = require('path');
const stingHelpers = require('../helpers/string-helpers');

function getBaseConfig(){
    return {
        defaultLayout: 'main',
        extname: '.hbs',
        helpers: {
            imageUrl(imageName){
                return `/images/${imageName}`;
            },
            iconUrl(imageName){
                return `/images/icons/${imageName}`;
            },
            smartenQuotes: stingHelpers.smartenQuotes,
        }
    };
}

function createEngine(){
    return exphbs(getBaseConfig());
}

function createCompiler(){
    const config = {
        ...getBaseConfig(),
        layoutsDir: path.resolve(__dirname, '..', '..', 'views', 'layouts'),
        partialsDir: path.resolve(__dirname, '..', '..', 'views', 'partials'),
    };
    return exphbs.create(config);
}

module.exports = {
    createEngine,
    createCompiler,
};