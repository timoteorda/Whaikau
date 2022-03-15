import React from 'react'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'

const NavBar = () => {

    return (
            <header>
                <div className='navBar'>
                    <a href="#"><img className='logoWhaikau' src="../img/logoWhaikau.jpg" alt="logo" /></a>
                    < CartWidget />
                    <ul className='ulNav'>
                        <div>
                            <a href='#' className='dropbtn'>INICIO</a>
                        </div>                        
                        <div className='dropdown'>
                            <a href='#' className='dropbtn'>PRODUCTOS</a>
                                <div className='dropdown-content'>
                                    <a href="#">HOMBRE</a>
                                    <a href="#">MUJER</a>
                                    <a href="#">ACCESORIOS</a>
                                    <a href="#">MADERA</a>
                                </div>                    
                        </div>
                        <div>
                            <a href='#' className='dropbtn'>CONTACTO</a>   
                        </div>                        
                    </ul>
                </div>    
            </header>
    )
}

export default NavBar