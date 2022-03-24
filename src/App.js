
import React from 'react'
import NavBar from './components/NavBar.js'
import Main from './components/Main.js'
import Footer from './components/Footer.js'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from 'react-router-dom'
import MiProvider from './components/Contexto.js'

const App = () => {
  return (
    <BrowserRouter>
      <MiProvider>
        <NavBar/>
        <Main/>
      </MiProvider>
        <Footer/>
        <ToastContainer/>
      </BrowserRouter>
  )
    
}

export default App