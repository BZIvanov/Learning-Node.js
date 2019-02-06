const Thread = require('../models/Thread');

module.exports = {
    index: (req, res) => {
        res.render('home/index');
    }
};
