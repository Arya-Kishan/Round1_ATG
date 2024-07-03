import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import Navbar from './pages/HomePage/Navbar'
import Home from './pages/HomePage/Home'
import CategoryPage from './pages/HomePage/CategoryPage'
import AddList from './pages/Auth/AddList'

function App() {
  const [count, setCount] = useState(0)

  document.body.addEventListener("keyup", (e) => {

    if (e.ctrlKey && e.key === 'Home') {
      console.log("arya");
      document.body.scrollTo(0, 0);
    }

  })

  return (
    <div className='font-poppins'>

      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Round1_ATG' element={<Home />} />
        <Route path='/addList' element={<AddList />} />
      </Routes>
    </div>
  )
}

export default App
