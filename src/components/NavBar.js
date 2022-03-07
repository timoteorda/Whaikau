import React from 'react'
import CartWidget from './CartWidget'

const NavBar = () => {

    return (
            <header>
                <img className='logoWhaikau' src="../img/logoWhaikau.jpg" alt="logo" />
                < CartWidget />
                <ul className="barraPrincipal">
                    <li><a className='liNav' href="#">INICIO</a></li>
                    <li><a className='liNav' href="#">PRODUCTOS</a></li>
                    <li><a className='liNav' href="#">CONTACTO</a></li>
                </ul>
            </header>
            

    )
}

export default NavBar