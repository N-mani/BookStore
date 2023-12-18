const express = require('express')
const { getAllBooks, createBook, editBook, deleteBook, getBook } = require('../controller/bookRoutesController')
const router = express.Router()

router.get('/', getAllBooks)
router.get('/:id', getBook)

router.post('/create', createBook)

router.put('/edit/:id', editBook)

router.delete('/delete/:id', deleteBook)

module.exports = router