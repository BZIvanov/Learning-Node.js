const Book = require('../data/book');

module.exports = {
    getAddBook: (req, res) => {
        res.render('books/add');
    },
    postAddBook: (req, res) => {
        let book = req.body;
        
        if(!book.title || !book.imageUrl) {
            book.error = "Title and Image URL are required";
            res.render('books/add', book)
        }

        book.releaseDate = new Date(book.releaseDate);

        // this is where we save the book in our database
        Book.create(book).then(() => {
            res.redirect('/all');
        })
    },
    getAll: (req, res) => {
        Book
            .find()
            // releaseDate starts with minus sign for descending sort
            .sort('-releaseDate')
            .then(books => {
                // books are wrapped in object brackets because we will receive them as an array and not an object
                res.render('books/all', { books });
            })
    },
    getDetails: (req, res) => {
        const id = req.params.id;

        Book
            .findById(id)
            .then(book => {
                res.render('books/details', book);
            })
    }
}