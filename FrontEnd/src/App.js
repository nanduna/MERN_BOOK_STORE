import React from 'react'
import { Routes, Route } from 'react-router-dom'
import CreateBook from './Pages/CreateBook'
import DeleteBook from './Pages/DeleteBook'
import EditBook from './Pages/EditBook'
import Home from './Pages/Home'
import ShowBook from './Pages/ShowBook'



export const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Book/Create' element={<CreateBook />} />
      <Route path='/Book/Delete/:bookId' element={<DeleteBook />} />
      <Route path='/Book/Edit/:bookId' element={<EditBook />} />
      <Route path='/Book/Show/:bookId' element={<ShowBook />} />
    </Routes>
  )
}

export default App

