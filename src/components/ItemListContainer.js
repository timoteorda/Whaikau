import React, {useEffect, useState} from 'react'
import ItemList from '../components/ItemList'
import Item from '../components/Item'


function getDatos (){
    return new Promise((resolve, reject) =>{
    setTimeout(()=>{
        resolve(Item);   
    }, 2000);
    });
}

function ItemListContainer() {

    const[productos ,setProductos] = useState([]);

    useEffect(()=>{
        getDatos()
            .then(promesa => setProductos(promesa))
    })

    return (
        <>
        <img className='banner' src="../img/bannerUno.jpg" alt="banner" />
        <h1 className="tituloBienvenido">FOLLOW YOUR IDEALS</h1>
        <ItemList productos={productos}/>        
        </>
    )}

export default ItemListContainer