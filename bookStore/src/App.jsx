import { Routes, Route } from 'react-router-dom'
import DeleteBook from './pages/deleteBook/DeleteBook'
import BookShow from './pages/BookShow/BookShow'
import CreateBook from './pages/createBook/CreateBook'
import EditBook from './pages/editBook/EditBook'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<BookShow />} />
        <Route path="/books/create" element={<CreateBook />} />
        <Route path="/books/edit/:id" element={<EditBook />} />
        <Route path="/books/delete/:id" element={<DeleteBook />} />
      </Routes>
    </>
  )
}

export default App
