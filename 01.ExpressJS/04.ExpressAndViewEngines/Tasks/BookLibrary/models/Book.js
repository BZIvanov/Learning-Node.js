const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    bookTitle: { type: mongoose.SchemaTypes.String, required: true },
    bookAuthor: { type: mongoose.SchemaTypes.String },
    releaseDate: { type: mongoose.SchemaTypes.Date, required: true },
    bookPoster: { type: mongoose.SchemaTypes.String, required: true },
});

let Book = mongoose.model('Book', bookSchema);

module.exports = Book;