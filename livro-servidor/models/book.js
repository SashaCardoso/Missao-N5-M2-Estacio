const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: String,
    publisherId: Number,
    synopsis: String,
    authors: [String]
}, { collection: 'livros' });

const BookModel = mongoose.model("Book", bookSchema);

module.exports = BookModel;