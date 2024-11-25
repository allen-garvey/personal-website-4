const path = require('path');
const express = require('express');
const handlebars = require('./handlebars');

function createServer() {
    const app = express();

    app.engine('hbs', handlebars.createEngine());
    app.set('view engine', 'hbs');

    app.use(
        '/images',
        express.static(
            path.join(__dirname, '..', '..', 'public_html', 'images')
        )
    );

    return app;
}

module.exports = {
    createServer,
};
