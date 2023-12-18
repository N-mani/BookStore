import { useEffect, useState } from 'react'
import axios from 'axios'
import './BookShow.scss'
import { Link } from 'react-router-dom'
import Ametarasu from '../Loadingpage/Ametarasu'
const BookShow = () => {
  const [books, setBooks] = useState([])
  const [Loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    axios.get('http://localhost:5000/books/').then((res) => {
      setBooks(res.data.books)
      setLoading(false)
    })
  }, [])
  return (
    <div className="container">
      {Loading ? (
        <Ametarasu />
      ) : (
        <ul>
          <Link to="/books/create">+</Link>
          {books.map((b, index) => (
            <li key={index}>
              <h1>Title: {b.title}</h1>
              <h1>Author: {b.author}</h1>
              <h1>PublishYear: {b.publishYear}</h1>
              <Link to={`/books/edit/${b._id}`} className="edit">
                Edit
              </Link>
              <Link to={`/books/delete/${b._id}`} className="delete">
                Delete
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default BookShow
