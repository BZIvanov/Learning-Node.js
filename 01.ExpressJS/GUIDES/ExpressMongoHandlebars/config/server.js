const express = require('express');
const path = require('path');
// body-parser module will allow us working with html forms
const bodyParser = require('body-parser');
const handlebars = require('express-handlebars');

module.exports = (app) => {
    app.engine('hbs', handlebars({
        // the properties below come for Handlebars, not our custom
        extname: '.hbs',
        layoutsDir: 'views/layouts',
        defaultLayout: 'main'
    }));
    
    app.set('view engine', 'hbs');

    // the string content is standing for the folder content. Functions in middleware have to be called
    app.use(express.static(path.join(__dirname, '../content')));
    app.use(bodyParser.urlencoded({ extended: true }))
}