import axios from 'axios'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Ametarasu from '../Loadingpage/Ametarasu'

const DeleteBook = () => {
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const { id } = useParams()
  const deleteBook = () => {
    setLoading(true)
    axios
      .delete(`http://localhost:5000/books/delete/${id}`)
      .then(setLoading(false), navigate('/'))
  }
  return (
    <div>
      {loading ? <Ametarasu /> : ''}
      Are you sure want to delete this book?
      <button onClick={() => deleteBook()}>Yes, delete it</button>
    </div>
  )
}

export default DeleteBook
