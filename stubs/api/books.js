const express = require('express')

const booksController = express.Router()

const books = []

booksController.get('/', (req, res) => {
    res.send(books)
})

booksController.post('/', (req, res) => {
    const {
        name,
        author,
        fileLink
    } = req.body

    books.push({
        name, author, fileLink
    })

    res.send({
        ok: true
    })
})

module.exports = booksController;