import React from 'react'
import CartWidget from './CartWidget'

const NavBar = () => {
    

    return (
            <header>
                <h1 className="titulo" >Whaikau</h1>
                <ul className="barraPrincipal">
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Productos</a></li>
                    <li><a href="#">Contacto</a></li>
                < CartWidget />
                </ul>
            </header>
            

    )
}

export default NavBar