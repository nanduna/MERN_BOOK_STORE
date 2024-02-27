import React, {useEffect,useState} from 'react'
import axios from "axios"
import { Link } from 'react-router-dom';
import { AiOutlineEdit, AiOutlineInfoCircle } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdInfoCircle, MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
import Spinner from '../Spinner';

// import { set } from 'mongoose';

const Home = () => {

  const [books, setBooks] = useState([])
  const [loading, setloading] = useState([false])
  useEffect(()=>{
    setloading(true)
    axios
      .get('http://localhost:5002/books')
      .then((response)=>{
        setBooks(response.data.data)
        setloading(false)
      })
      .catch((err)=>{
        console.log(err)
        setloading(false)
      })

  })
  

  return (
    <div className='p-4'>
      <div className='flex justify-center items-center gap-x-4'>
        <h1 className='text-3xl my-8'>Book List</h1>
        <Link to='/Book/Create'>
          <MdOutlineAddBox className = 'text-sky-800 text-4xl'/>
        </Link>
      </div>
      {loading?(
        <Spinner/>
      ) : (
        <table className='w-full border-separate border-spacing-2'>
          <thead>
            <tr>
              <th className='border border-slate-600 rounded-md'>No</th>
              <th className='border border-slate-600 rounded-md'>Title</th>
              <th className='border border-slate-600 rounded-md max-md:hidden'>Author</th>
              <th className='border border-slate-600 rounded-md max-md:hidden'>Publish Year</th>
              <th className='border border-slate-600 rounded-md'>Operation</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, index)=>(
              <tr key={book._id} className='h-8'>
                <td className='border border-slate-700 rounded-md text-center'></td>
                {index+1}
                <td className='border border-slate-700 rounded-md text-center'>{book.title}</td>
                <td className='border border-slate-700 rounded-md text-center'>{book.author}</td>
                <td className='border border-slate-700 rounded-md text-center'>{book.publishYer}</td>
                <td className='border border-slate-700 rounded-md text-center'>
                  <div className='flex-justify-center gap-x-4'>
                    <Link to={`/Book/Edit/${book._id}`}>
                      <MdInfoCircle className='text-2xl text-green-800'/>
                    </Link>
                    <Link to={`/Book/Edit/${book._id}`}>
                      <MdInfoCircle className='text-2xl text-green-800'/>
                    </Link>
                  </div>
                </td>

              </tr>

            ))}
          </tbody>
        </table>
      )
    }

    </div>
  )
}

export default Home