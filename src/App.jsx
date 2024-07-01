import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './pages/Navbar'
import HomePage from './pages/HomePage'
import CategoryPage from './pages/CategoryPage'
import AddPage from './pages/AddPage'
import TestimonialPage from './pages/TestimonialPage'
import End from './pages/End'
import Footer from './pages/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='font-poppins'>
      <Navbar />
      <HomePage />
      <CategoryPage />
      <AddPage />
      <TestimonialPage />
      <End />
      <Footer />
    </div>
  )
}

export default App
