import React from 'react'
import ItemCount from './ItemCount'
import ItemListContainer from './ItemListContainer'


const Main = () => {

    const persona = {
        nombre: 'Timoteo',
    }

    return (
            <main>
                <ItemListContainer persona = {persona} /> 
                <ItemCount />    
            </main>
    )
}

export default Main