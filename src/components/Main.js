import React from 'react'
import ItemCount from './ItemCount'
import ItemListContainer from './ItemListContainer'



const Main = () => {

    return (
            <main>
                <ItemListContainer />
                <a href="https://www.instagram.com/whaikau/"  target="_blank">
                    <div className='seguinosIg'>
                        <div>
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