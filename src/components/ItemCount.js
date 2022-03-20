import React, { useState } from 'react'

    const ItemCount = ({onAdd, stock}) => {

        let [cant, setCant] = useState(1)

        const handleSumar= () => {
            if (cant < stock)
            setCant (cant + 1)
        }
        const handleRestar= () => {
            if (cant > 1)
            setCant (cant - 1)
        }
        const handleCarrito = () => {
            onAdd(cant)
        }
        
    return(                
        <div className='divContador'>
            <h3 className="tituloContador">Seleccione la cantidad de unidades</h3>
                <div className='flexContador'>
                    <button className='botonContador' onClick={handleRestar}>-</button>                    
                    <h3 className='cantContador'>{cant}</h3>
                    <button className='botonContador' onClick={handleSumar}>+</button>
                </div>
            <button className='agregarCarrito' onClick={handleCarrito}>Agregar al carrito</button>
        </div>                
    )
}
export default ItemCount
