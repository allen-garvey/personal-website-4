const exphbs = require('express-handlebars');

function createEngine(){
    return exphbs({
        defaultLayout: 'main',
        extname: '.hbs',
        helpers: {
            imageUrl(imageName){
                return `/images/${imageName}`;
            },
            iconUrl(imageName){
                return `/images/icons/${imageName}`;
            }
        }
    });
}

function createCompiler(){
    return exphbs.create({
        defaultLayout: 'main',
        extname: '.hbs',
        helpers: {
            imageUrl(imageName){
                return `/images/${imageName}`;
            },
            iconUrl(imageName){
                return `/images/icons/${imageName}`;
            }
        }
    });
}

module.exports = {
    createEngine,
    createCompiler,
};