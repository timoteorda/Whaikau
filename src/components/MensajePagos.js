import React from 'react'

const MensajePagos = () => {
  return (
    <div className='contenedorPaga'>
        <div className='flexPaga'>
            <div>
                <img src="../img/iconoCamion.png" alt="ICONO" />
            </div>
            <div className='contenedorTitulos'>
                <h2 className='tituloPago'>ENVIAMOS TU COMPRA</h2>
                <h3 className='subtituloPago'>Envios a todo el país</h3>
            </div>
        </div>
        <div className='flexPaga'>
            <div>
                <img src="../img/iconoTarjeta.png" alt="ICONO" />
            </div>
            <div className='contenedorTitulos'>
                <h2 className='tituloPago'>PAGÁ COMO QUIERAS</h2>
                <h3 className='subtituloPago'>Tarjetas de crédito o efectivo</h3>
            </div>
        </div>
        <div className='flexPaga'>
            <div>
                <img src="../img/iconoCandado.png" alt="ICONO" />
            </div>
            <div className='contenedorTitulos'>
                <h2 className='tituloPago'>COMPRÁ CON SEGURIDAD</h2>
                <h3 className='subtituloPago'>Tus datos siempre protegidos</h3>
            </div>
        </div>
    </div>
  )
}

export default MensajePagos