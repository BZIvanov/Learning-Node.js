const express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');

module.exports = (app) => {
    // here we set express working with handlebars
    app.engine('hbs', handlebars({
        extname: '.hbs',
        // layoutsDir and defaultLayout are predefined properties which set default view for each page. layoutsDir specify directory where the view can be found and defaultLayout property specify the name of the file used for view
        layoutsDir: 'views/layouts',
        defaultLayout: 'main'
    }));
    app.set('view engine', 'hbs');

    app.use('/content', express.static('content'));

    app.use(bodyParser.urlencoded({ extended: true }));
}
