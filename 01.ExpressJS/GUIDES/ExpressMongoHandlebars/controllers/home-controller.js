const Book = require('../data/book');

module.exports = {
    getIndex: (req, res) => {
        Book.count().then(books => {
            res.render('index', { books })
        })
    }
}