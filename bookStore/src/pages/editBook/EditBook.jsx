import { useState, useEffect } from 'react'
import axios from 'axios'
import Ametarasu from '../Loadingpage/Ametarasu'
import { useNavigate, useParams } from 'react-router-dom'

const EditBook = () => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [publishYear, setPublishYear] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const { id } = useParams()

  useEffect(() => {
    setLoading(true)
    axios.get(`http://localhost:5000/books/${id}`).then((res) => {
      setTitle(res.data.singleBook.title),
        setAuthor(res.data.singleBook.author),
        setPublishYear(res.data.singleBook.publishYear)
      setLoading(false)
    })
  }, [])

  const handleEditBook = () => {
    const book = {
      title,
      author,
      publishYear,
    }
    setLoading(true)
    axios
      .put(`http://localhost:5000/books/edit/${id}`, book)
      .then(setLoading(false), navigate('/'))
  }
  return (
    <div>
      {loading ? <Ametarasu /> : ''}
      <div>
        <h1>Edit Book</h1>

        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            placeholder="Enter Title of the book"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="author">Author</label>
          <input
            type="text"
            value={author}
            placeholder="Enter author of the book"
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="publishYear">Year</label>
          <input
            type="text"
            value={publishYear}
            placeholder="Enter publishYear of the book"
            onChange={(e) => setPublishYear(e.target.value)}
          />
        </div>
        <button onClick={handleEditBook}>Submit</button>
      </div>
    </div>
  )
}

export default EditBook
