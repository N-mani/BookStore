import { useState } from 'react'
import axios from 'axios'
import Ametarasu from '../Loadingpage/Ametarasu'
import { useNavigate } from 'react-router-dom'

const CreateBook = () => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [publishYear, setPublishYear] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleBook = () => {
    const book = {
      title,
      author,
      publishYear,
    }
    setLoading(true)
    axios
      .post('http://localhost:5000/books/create', book)
      .then(setLoading(false), navigate('/'))
  }
  return (
    <div>
      {loading ? <Ametarasu /> : ''}
      <div>
        <h1>Create Book</h1>

        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            placeholder="Enter Title of the book"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="author">Author</label>
          <input
            type="text"
            name="author"
            value={author}
            placeholder="Enter author of the book"
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="publishYear">Year</label>
          <input
            type="text"
            name="publishYear"
            value={publishYear}
            placeholder="Enter publishYear of the book"
            onChange={(e) => setPublishYear(e.target.value)}
          />
        </div>
        <button onClick={handleBook}>Submit</button>
      </div>
    </div>
  )
}

export default CreateBook
