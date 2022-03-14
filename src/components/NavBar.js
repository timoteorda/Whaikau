import React from 'react'
import CartWidget from './CartWidget'

const NavBar = () => {

    return (
            <header>
                <div className='navBar'>
                    <img className='logoWhaikau' src="../img/logoWhaikau.jpg" alt="logo" />
                    < CartWidget />
                    <ul className='ulNav'>
                        <a href='#' className='dropbtn'>INICIO</a>
                        <div className='dropdown dropbtn'>
                        <a href='#' className='dropbtn'>PRODUCTOS</a>
                            <div className='dropdown-content'>
                                <a href="#">HOMBRE</a>
                                <a href="#">MUJER</a>
                                <a href="#">ACCESORIOS</a>
                                <a href="#">MADERA</a>
                            </div>                    
                        </div>
                        <a href='#' className='dropbtn'>CONTACTO</a>
                    </ul>
                </div>    
            </header>
    )
}

export default NavBar