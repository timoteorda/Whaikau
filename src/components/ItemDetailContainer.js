import React from 'react';
import ItemDetail from './ItemDetail';
import {useState, useEffect} from 'react'
import Productos from './Productos'
import { toast } from 'react-toastify';


const ItemDetailContainer = () => {
      
    const [producto, setProducto] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(()=>{

        function getDatos (){
            return new Promise((resolve, reject) =>{
            setTimeout(()=>{
                resolve(Productos[4]);   
            }, 2000);
            });
        }

        getDatos()
            .then((resultado)=>{
                toast.dismiss()
                setProducto(resultado)
            })            
            .catch(()=>{
                toast.error("Error al cargar los productos")
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
                </>
            )
        } 
}

export default ItemDetailContainer