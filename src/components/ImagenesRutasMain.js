import React from 'react'
import { Link } from 'react-router-dom'


const ImagenesRutasMain = () => {
  return (
    <div className='mainImagenesUrl'>
        <div className='contenedor'>
            <Link to='/categoria/hombre'>
            <img className='imagenSeccionMain' src="../img/menMain.jpg" alt="Imagen a productos de hombre" />
            <h4 className='tituloEncimaImagen'>men</h4>
            </Link>
        </div>
        <div className='contenedor'>
            <Link to='/categoria/mujer' >
                <img className='imagenSeccionMain' src="../img/womenMain.png" alt="Imagen a productos de mujeres" />
                <h4 className='tituloEncimaImagen' >women</h4>
            </Link>
        </div>
        <div className='contenedor'>
            <Link to='/categoria/accesorios' >
                <img className='imagenSeccionMain' src="../img/accesoriosMain.png" alt="Imagen a accesorios" />
                <h4 className='tituloEncimaImagen'>accesories</h4>
            </Link>
        </div>
    </div>
  )
}

export default ImagenesRutasMain