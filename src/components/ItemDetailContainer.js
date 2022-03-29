import React from 'react';
import ItemDetail from './ItemDetail';
import {useState, useEffect} from 'react'
import Productos from './Productos'
import { toast } from 'react-toastify';
import { useParams } from "react-router-dom";;


const ItemDetailContainer = () => {
      
    const [producto, setProducto] = useState({});
    const [loading, setLoading] = useState(true);

    const { idProducto } = useParams()

    const buscarProducto = Productos.find(
        (producto) => producto.id === parseInt(idProducto)       
        );

    useEffect(()=>{

        function getDatos (){
            return new Promise((resolve, reject) =>{
                resolve(buscarProducto);   
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
              position: "top-left",
              autoClose: 500,
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