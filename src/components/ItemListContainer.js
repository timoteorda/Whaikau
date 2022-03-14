import React, {useEffect, useState} from 'react'
import ItemList from './ItemList'
import Productos from './Productos'
import { toast } from 'react-toastify';


function ItemListContainer() {

    const[productos ,setProductos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{

        function getDatos (){
            return new Promise((resolve, reject) =>{
            setTimeout(()=>{
                resolve(Productos);   
            }, 2000);
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
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    } else{
        return (
        <>    
        <ItemList productos={productos}/>
        <a href='#'><button className='verTodosProductos'>VER TODOS LOS PRODUCTOS</button></a>        
        </>
    )}
}




export default ItemListContainer