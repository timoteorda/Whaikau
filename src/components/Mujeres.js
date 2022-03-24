import React from 'react'
import Productos from './Productos'
import { toast } from 'react-toastify';
import ItemList from './ItemList'
import { useEffect, useState } from 'react';

const Mujeres = () => {

    const productosMujer = Productos.filter(x => x.categoria == 'mujer')

    const[productos ,setProductos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{

        function getDatos (){
            return new Promise((resolve, reject) =>{            
                resolve(productosMujer);   
            });
        }

        getDatos()
            .then((resultado)=>{
                toast.dismiss()
                setProductos(resultado)
            })            
            .catch(()=>{
                toast.error("Error al cargar los productos")
            })
            .finally(()=>{
                setLoading(false)
            })
    },[])

    if (loading){
        return toast.info('Cargando los productos...', {
            position: "top-left",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    } else{
        return (
        <>
        <img className='bannerProductos' src="../img/bannerProductos.jpg" alt="" />
        <div className='divIdeals'>
            <h1 className="tituloIdeals">FOLLOW YOUR IDEALS</h1>
            <img className='iconoOla' src="../img/ola.png" alt="Ola" />
        </div>     
        <ItemList productos={productos}/> 
        </>
    )}
}

export default Mujeres