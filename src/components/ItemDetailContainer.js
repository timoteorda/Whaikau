import React from 'react';
import ItemDetail from './ItemDetail';
import {useState, useEffect} from 'react'
import ItemCount from './ItemCount'
import Productos from './Productos'
import { toast } from 'react-toastify';
import { toBePartiallyChecked } from '@testing-library/jest-dom/dist/matchers';


const ItemDetailContainer = () => {
  
  
  function getDatos (){
      return new Promise((resolve, reject) =>{
      setTimeout(()=>{
          resolve(Productos);   
      }, 2000);
      });
  }

    
    const [producto, setProducto] = useState({});
    const [loading, setLoading] = useState(true);

        useEffect(()=>{
          getDatos()
          .then((resultado)=>{
            toast.dismiss()
            setProducto(resultado)
        })    
            .catch(()=>{
              toast.info("Error al cargar el producto")
            })
            .finally(()=>{
              setLoading(false)
            })        
          },[])

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