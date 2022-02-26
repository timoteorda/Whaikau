import React from 'react'
import ItemListContainer from './ItemListContainer'


const Main = () => {

    const persona = {
        nombre: 'Timoteo',
    }

    return (
            <main>
                <ItemListContainer persona = {persona} />      
            </main>
    )
}

export default Main