const Book = require("../models/book");
const mongoose = require('mongoose');

exports.getBooks = async (req, res) => {
    try {
        const books = await Book.find();
        console.log(books)
        return res.send(books);
    } catch (error) {
        console.log(`Error: ${error}`);
        console.log(`Error`);
        return [];
    }
}

exports.getBookById = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id).exec();
        console.log('Book found!')
        return res.send(book);
    } catch (error) {
        console.log(`Error: ${error}`);
        console.log(`Error`);
        return [];
    }
}

exports.addBook = async (req, res) => {
    try {
        const newBook = await Book.create({
            title: req.body.title,
            publisherId: req.body.publisherId,
            synopsis: req.body.synopsis,
            authors: req.body.authors,
        });
        return res.send(newBook);
    } catch (error) {
        console.log(`Error: ${error}`);
        console.log(`Error`);
        return null;
    }
}

exports.deleteBook = async (req, res) => {
    try {
        const result = await Book.deleteOne({ _id: req.params.id }).exec();
        if (result.deletedCount === 0) {
            console.log('Book not found');
            return null;
        } else {
            console.log('Book has been deleted');
            return res.send(result);;
        }
    } catch (error) {
        console.log(`Error: ${error}`);
        console.log(`Error`);
        return null;
    }
};