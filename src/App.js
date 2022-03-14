
import React from 'react'
import NavBar from './components/NavBar.js'
import Main from './components/Main.js'
import Footer from './components/Footer.js'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


const App = () => {

  return <>
    <NavBar/>
    <Main/>
    <Footer/>
    <ToastContainer/>
  </>
}

export default App