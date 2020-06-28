const express = require('express');
const exphbs = require('express-handlebars');

function createServer(){
    const app = express();

    app.engine('hbs', exphbs({
        defaultLayout: 'main',
        extname: '.hbs',
        helpers: {
            imageUrl(imageName){
                return `/images/${imageName}`;
            }
        }
    }));

    app.set('view engine', 'hbs');

    return app;
}

module.exports = {
    createServer,
};