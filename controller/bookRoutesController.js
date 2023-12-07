const express = require('express')
const mongoose = require('mongoose')
const Book = require('../models/Books')


const getAllBooks = async (req, res) => {
  const books = await Book.find({})

  res.send({
    status: 'success',
    count: books.length,
    books
  })
}
const getBook = async (req, res) => {
  const bookId = req.params.id
  const singleBook = await Book.findById(bookId)
  if (!bookId) return res.send('Book Not Found')
  res.status(200).send({
    status: "success",
    message: 'This is the requested book',
    singleBook
  })
}

const createBook = async (req, res) => {
  const { title, author, publishYear } = req.body
  if (!title || !author || !publishYear) return res.status(400).send('All fields are mandatory')

  const newBook = {
    title, author, publishYear
  }

  const book = await Book.create(newBook)

  res.send(book)
}

const editBook = async (req, res) => {
  try {
    const { title, author, publishYear } = req.body
    if (!title || !author || !publishYear) return res.status(400).send('All fields are mandatory')

    let bookId = req.params.id
    const updatedBook = await Book.findByIdAndUpdate(bookId, req.body)

    if (!updatedBook) return res.status(404).send('Book Not Found')

    res.send({
      status: "success",
      message: "Book Updated successfully",
      updatedBook

    })
  } catch (error) {
    return res.status(404).send('Oops! There is an error')
  }
}

const deleteBook = async (req, res) => {

  try {
    const bookId = req.params.id
    if (!bookId) return res.status(404).send('Book Not Found')
    const deletedBook = await Book.findByIdAndDelete(bookId)
    res.send("Book Deleted successfully")
  } catch (error) {
    res.status(404).send('Oops there is an error')
  }
}

module.exports = { getAllBooks, getBook, createBook, editBook, deleteBook }
