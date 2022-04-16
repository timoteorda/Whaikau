import React from 'react'

const BannerSeguinosMain = () => {
  return (
    <>
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
  )
}

export default BannerSeguinosMain