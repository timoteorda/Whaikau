import React from 'react'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'
import Productos from './Productos'
import {contexto} from './Contexto'


const NavBar = () => {
    return (
            <header>
                <div className='navBar'>
                    <div className='navegacion'>
                        <input className='buscarNav' type="text" placeholder='Buscar'/>
                        <Link to="/"><img className='logoWhaikau' src="../img/logoWhaikau.jpg" alt="logo" /></Link>
                        < CartWidget />
                    </div>                 
                    <ul className='ulNav'>
                        <div>
                        <Link to="/" className='dropbtn'>INICIO</Link>
                        </div>                        
                        <div className='dropdown'>
                        <Link to="/productos" className='dropbtn'>PRODUCTOS</Link>
                                <div className='dropdown-content'>
                                    <Link to='/categoria/hombre' >HOMBRE</Link>
                                    <Link to='/categoria/mujer' >MUJER</Link>
                                    <Link to='/categoria/accesorios' >ACCESORIOS</Link>
                                    <Link to='/categoria/madera' >MADERA</Link>
                                </div>                    
                        </div>
                        <div>
                        <Link to='/contacto' className='dropbtn'>CONTACTO</Link>   
                        </div>                        
                    </ul>
                </div>    
            </header>
    )
}

export default NavBar