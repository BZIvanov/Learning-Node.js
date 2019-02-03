const Book = require('../models/Book');

module.exports = {
    getAddBook: (req, res) => {
        // in the render the string property is how the html/hbs is called and in which directory it is
        res.render('addBook');
    },

    postAddBook: (req, res) => {
        let book = req.body;
        if(!book.bookAuthor || !book.bookPoster) {
            book.isNotCorrect = true;
            // here we will call again get view and give it book object where properties are form fields and error check for notify
            res.render('addBook', book)
        } else {
            book.isNotCorrect = false;
            book.releaseDate = book.bookYear;

            Book.create(book).then(() => {
                res.redirect('/viewAllBooks');
            })
        }
    },

    getAll: (req, res) => {
        Book
            .find()
            .sort('-releaseDate')
            .then(books => {
                res.render('viewAll', { books })
            })
    },

    getDetails: (req, res) => {
        const id = req.params.id;
        Book.findById(id).then((book) => {
            console.log(book);
            res.render('details', book);
        });
    }
}