
import React from 'react'
import NavBar from './components/NavBar.js'
import Main from './components/Main.js'
import Footer from './components/Footer.js'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from 'react-router-dom'


const App = () => {
  return (
    <BrowserRouter>
      <NavBar/>
      <Main/>
      <Footer/>
      <ToastContainer/>
    </BrowserRouter>
  )
    
}

export default App