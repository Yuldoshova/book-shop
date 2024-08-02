import { Router } from "express";
import {  createBook, deleteBookById, getAllBooks, getBookById, updateBook, updateBookByPatch } from "../controllers/book.controller.js";

export const bookRoutes = Router()

bookRoutes
    .get('/', getAllBooks)
    .get('/:bookId', getBookById)
    .post('/', createBook)
    .put('/:bookId', updateBook)
    .patch('/:bookId',updateBookByPatch)
    .delete('/:bookId', deleteBookById)


// import { createBook, getAllBooks, getBookById } from "../controllers/book.controller.js";
// import express from "express";
// const router = express.Router()

// router
//     .get('/', getAllBooks)
//     .get('/:bookId', getBookById)
//     .post('/', createBook)
//     .put('/:bookId')
//     .patch('/:bookId')
//     .delete('/:bookId')

// module.exports = { bookRouters }
