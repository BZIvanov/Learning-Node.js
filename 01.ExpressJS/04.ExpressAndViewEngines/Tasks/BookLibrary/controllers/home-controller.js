const Book = require('../models/Book');

module.exports = {
    getIndex: (req, res) => {
        Book.countDocuments().then(books => {
            res.render('index', {
                books
            });
        })
    }
}