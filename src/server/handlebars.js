const exphbs = require('express-handlebars');
const path = require('path');

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
        layoutsDir: path.resolve(__dirname, '..', '..', 'views', 'layouts'),
        partialsDir: path.resolve(__dirname, '..', '..', 'views', 'partials'),
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