import React from 'react';
import ItemDetail from './ItemDetail';
import {useState, useEffect} from 'react'
import ItemCount from './ItemCount'
import Productos from './Productos'
import { toast } from 'react-toastify';


const ItemDetailContainer = () => {
      
    const [producto, setProducto] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(()=>{

      fetch(`Productos.js/${Productos.id}`)
      .then((response)=>{
          toast.dismiss()
          return response.json()
      })
      .then((resultado)=>{
        setProducto(resultado)
      })
      .catch(()=>{
        toast.error("Error al cargar el producto")
      })
      .finally(()=>{
        setLoading(false)
      })
  
    },{})

        if (loading){
            return toast.info('Cargando producto...', {
              position: "top-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              });
        } else {
            return (
                <>
                    <ItemDetail producto={producto}/>
                    <ItemCount/>                
                </>
            )
        } 
}

export default ItemDetailContainer