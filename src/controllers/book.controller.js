import { readFile } from '../utils/fileFunctions.js'

const books = readFile('./src/models/books.json')

export const getAllBooks = (_, res) => {
    res.render("index", { books: books });
}

export const getBookById = (req, res) => {
    let found = books.find(function (item) {
        return item.id === parseInt(req.params.id);
    });
    if (found) {
        res.status(200).json(found);
    } else {
        res.sendStatus(404);
    }
}

export const createBook = (req, res) => {
    let items = books.map(item => item.id);

    let newId = items.length > 0 ? Math.max.apply(Math, items) + 1 : 1;

    let newItem = {
        id: newId,
        name: req.body.name,
        author: req.body.author,
        page_number: req.body.page_number
    }

    books.push(newItem);

    res.status(201).json({
        'message': "successfully created",
        books
    });
}

export const updateBook = (req, res) => {
    let found = books.find(function (item) {
        return item.id === parseInt(req.params.id);
    });
    if (found) {
        let updatebooks = {
            id: found.id,
            name: req.body.name,
            author: req.body.author,
            page_number: req.body.page_number
        };

        let targetIndex = books.indexOf(found);

        books.splice(targetIndex, 1, updatebooks);

        res.status(201).json({ 'message': "books updated", books });
    } else {
        res.status(404).json({
            'message': 'unable to insert book'
        });
    }
}

export const updateBookByPatch = (req, res) => {

}

export const deleteBookById = (req, res) => {
    let found = books.find(function (item) {
        return item.id === parseInt(req.params.id);
    });
    if (found) {
        let targetIndex = books.indexOf(found);
        books.splice(targetIndex, 1);
        res.status(201).json({
            'message': "successfully deleted",
            books
        });
    } else {
        res.status(404).json({
            'message': "book not found"
        });
    }
}

// module.exports = { getAllBooks, getBookById, createBook, deleteBookById }
