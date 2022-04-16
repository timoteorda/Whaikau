import React from 'react'
import Formulario from './Formulario'

const Contacto = () => {
  return (
    <>
    <img className='imagenContacto' src="../img/imagenContacto.jpg" alt="" />
    <div className='divContacto'>
      <div className='contenedorContacto'>
        <ul className='contacto'>
            <li className='contactoRow'>
                <img className='iconoContacto' src="../img/celular.png" alt="Icono Telefono" />
                <p className='pContacto'>2216363009</p>
            </li>
            <li className='contactoRow'>
                <img className='iconoContacto' src="../img/arroba.png" alt="Icono Arroba" />
                <p className='pContacto'>whaikau@gmail.com</p>
              </li>
            <li className='contactoRow'>
                <img className='iconoContacto' src="../img/ubicacion.png" alt="Icono Ubicacion" />
                <p className='pContacto'>493 n°1967, Manuel B Gonnet</p>
            </li>
        </ul>        
      </div>
      <div className='contenedorContacto'>
        <ul className='contacto'>
            <li className='contactoRow'>
                <img className='iconoContacto' src="../img/iconoIg.png" alt="Icono Telefono" />
                <a target="_blank" href="https://www.instagram.com/whaikau/"><p className='pContactoA'>Seguinos en Instagram</p></a>
            </li>
            <li className='contactoRow'>
                <img className='iconoContacto' src="../img/iconoFb.png" alt="Icono Arroba" />
                <a target="_blank" href="https://www.facebook.com/Whaikau/"><p className='pContactoA'>Seguinos en Facebook</p></a>
              </li>
        </ul>
      </div>
      <div className='contenedorContacto'>
          <Formulario/>
      </div>
    </div>
    </>
  )
}

export default Contacto