import React, {useEffect, useState} from 'react'
import ItemList from './ItemList'
import Productos from './Productos'
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom'
import Banner from './Banner'


function ItemListContainer() {

    const[productos ,setProductos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{

        function getDatos (){
            return new Promise((resolve, reject) =>{            
                resolve(Productos);   
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
        <Banner/>
        <div className='divIdeals'>
            <h1 className="tituloIdeals">FOLLOW YOUR IDEALS</h1>
            <img className='iconoOla' src="../img/ola.png" alt="Ola" />
        </div>     
        <ItemList productos={productos}/>
        <Link  to="/productos"><button className='verTodosProductos'>VER TODOS LOS PRODUCTOS</button></Link>
        <img className='banner' src="../img/bannerFin.jpg" alt="" />
        <div>
            <a href="https://www.instagram.com/whaikau/"  target="_blank">
                <div className='seguinosIg'>
                    <div className='logoIgIndex'>
                        <img src="../img/logoInstagram.png" alt="" />
                    </div>
                    <div className='divSeguinosTexto'>
                        <div>
                            <p className='seguinosTexto'>Seguinos en Instagram</p>
                        </div>
                        <div>
                            <p className='seguinosArroba'>@Whaikau</p>
                        </div>
                    </div>
                </div>
            </a>
        </div>     
        </>
    )}
}




export default ItemListContainer