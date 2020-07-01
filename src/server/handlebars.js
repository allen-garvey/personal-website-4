const exphbs = require('express-handlebars');

function createHandlebarsCompiler(){
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

module.exports = {
    createHandlebarsCompiler,
};