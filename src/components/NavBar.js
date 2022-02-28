import React from 'react'
import CartWidget from './CartWidget'

const NavBar = () => {
    

    return (
            <header>
                <h1 className="titulo" >Whaikau</h1>
                <ul className="barraPrincipal">
                    <li className='liNav'><a href="#">Inicio</a></li>
                    <li className='liNav'><a href="#">Productos</a></li>
                    <li className='liNav'><a href="#">Contacto</a></li>
                < CartWidget />
                </ul>
            </header>
            

    )
}

export default NavBar