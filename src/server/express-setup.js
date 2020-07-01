const express = require('express');
const handlebars = require('./handlebars');

function createServer(){
    const app = express();

    app.engine('hbs', handlebars.createEngine());
    app.set('view engine', 'hbs');

    return app;
}

module.exports = {
    createServer,
};