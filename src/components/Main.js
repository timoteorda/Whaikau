import React from 'react'
import ItemCount from './ItemCount'
import ItemListContainer from './ItemListContainer'
import ItemDetailContainer from './ItemDetailContainer'
import Banner from './Banner'



const Main = () => {

    return (
            <main>
                <Banner/>
                <div className='divIdeals'>
                    <h1 className="tituloIdeals">FOLLOW YOUR IDEALS</h1>
                    <img className='iconoOla' src="../img/ola.png" alt="Ola" />
                </div> 
                <ItemListContainer />
                <ItemDetailContainer />
                <img className='banner' src="../img/bannerFin.jpg" alt="" />
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
            </main>
    )
}

export default Main