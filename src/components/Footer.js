import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
            <footer>
                <div className='footerGris'>
                    <div>
                        <h3 className='tituloFooter'>Navegación</h3>
                        <Link to="/"><li className='liFooter'><p className='pNavegacion'>Inicio</p></li></Link>
                        <Link to="/productos"><li className='liFooter'><p className='pNavegacion'>Productos</p></li></Link>
                        <Link to="/contacto"><li className='liFooter'><p className='pNavegacion'>Contacto</p></li></Link>
                    </div>
                    <div>
                        <h3 className='tituloFooter'>Contacto</h3>
                            <ul className='ulContacto'>
                                <li className='liFooter'><img className='icono' src="../img/iconoTelefono.png" alt="Icono Telefono" /><p className='textoLiFooter'>2216363009</p></li>
                                <li className='liFooter'><img className='icono' src="../img/iconoArroba.png" alt="Icono Arroba" /><p className='textoLiFooter'>whaikau@gmail.com</p></li>
                                <li className='liFooter'><img className='icono' src="../img/iconoUbicacion.png" alt="Icono Ubicacion" /><p className='textoLiFooter'>493 n°1967 Manuel B Gonnet</p></li>
                            </ul>
                    </div>
                    <div>
                        <h3 className='tituloFooter'>Redes Sociales</h3>
                        <ul className='ulRedes'>
                            <li><a target="_blank" href="https://www.instagram.com/whaikau/"><img src="../img/iconoIg.png" alt="icono Instagram" /></a></li>
                            <li><a target="_blank" href="https://www.facebook.com/Whaikau/"><img src="../img/iconoFb.png" alt="Icono Facebook" /></a></li>
                        </ul>
                    </div>
                </div>
                <div className='divDerechos'>
                    <p className='derechos'>	© Todos los derechos reservados Whaikau - 2022</p>
                </div>
            </footer>
    )
}

export default Footer