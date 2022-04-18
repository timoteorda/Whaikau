import React from 'react'
import { Link } from 'react-router-dom'


const GraciasCompra = () => {
    
  return (
    <div className='divGracias'>
        <div className='divUnoGracias'>
            <img className='imagenExito' src="https://static.vecteezy.com/system/resources/previews/000/625/870/large_2x/vector-thumb-up-symbol-for-social-network.jpg" alt="Exito" />
        </div>
        <div className='divDosGracias'>
            <h1 className='tituloGracias'>¡Muchas gracias!</h1>
            <h4 className='subtituloGracias'>Su compra ha sido procesada con éxito</h4>       
            <Link to='/'><button className='volverGracias'>VER MAS PRODUCTOS</button></Link>
        </div>

    </div>
  )
}

export default GraciasCompra