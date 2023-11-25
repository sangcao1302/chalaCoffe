import React, { useEffect } from 'react'
import '../Scss/header.scss'
export default function Header() {
    
   const changeWidth=()=>{

    if(window.innerWidth>768){
        return(
            <div className='row'>
            <div className='col-4 col-md-3 col-sm-4'>
                <div className='logo '>
                    <img src="../assets/image/logo-dark.webp" alt="" />
                </div>
            </div>
            <div className='col-8 col-md-7 col-sm-8'>
                <div className='menu h-100'>
                    <ul className='nav-menu d-flex fs-5 p-0 align-items-center justify-content-center'>
                        <li className='menu-item'>Home</li>
                        <li className='menu-item'>About Us</li>
                        <li className='menu-item'>Contact Us</li>
                        <li className='menu-item'>Blog</li>
                        <li className='menu-item'>Serve</li>
                        <li className='menu-item'>Image</li>
                    </ul>
                </div>
            </div>
            <div className='col-8 col-md-2 col-sm-8'>
                <div className='d-flex justify-content-end'>
                    <button className="btn border" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions"><i className="fa fa-align-justify"></i></button>
                    <div className="offcanvas offcanvas-end" data-bs-scroll="true" tabIndex={-1} id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                        <div class="offcanvas-header d-flex justify-content-end">
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className='logo '>
                            <img src="../assets/image/logo-dark.webp" alt="" />
                        </div>
                      <ul className='menu-reponsive fs-5'>
                        <li className='menu-item'><i className="fab fa-facebook-f"></i><span className='mx-3'>Facebook</span></li>
                        <li className='menu-item'><i className="fab fa-instagram"></i><span className='mx-3'>Instagram</span></li>
                      </ul>
                      <hr />
                      <div className='mt-5 fs-5'>
                        <p className='mx-4'>090809809</p>
                        <p className='mx-4'>email@gmail.com</p>
                      </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
    else{
        return(
            <div className='row'>
            <div className='col-6'>
                <div className='logo '>
                    <img src="../assets/image/logo-dark.webp" alt="" />
                </div>
            </div>
            <div className='col-6'>
                <div className='d-flex justify-content-end'>
                    <button className="btn border" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions"><i className="fa fa-align-justify"></i></button>
                    <div className="offcanvas offcanvas-end" data-bs-scroll="true" tabIndex={-1} id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                        <div class="offcanvas-header d-flex justify-content-end">
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className='logo '>
                            <img src="../assets/image/logo-dark.webp" alt="" />
                        </div>
                      <ul className='menu-reponsive mt-5 fs-5'>
                        <li className='menu-item'>Home</li>
                        <li className='menu-item'>About Us</li>
                        <li className='menu-item'>Contact Us</li>
                        <li className='menu-item'>Blog</li>
                        <li className='menu-item'>Serve</li>
                        <li className='menu-item'>Image</li>
                      </ul>
                    </div>
                </div>
            </div>
        </div>
        )
    }
   }
  
 
  return (
       <nav className='container-fluid p-0' >
            <div className='container mt-3'>
               {changeWidth()}
            </div> 
            <div id="carouselExampleAutoplaying" className="carousel slide mt-5" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active w-100 h-100">
                           <div className='img'>
                                <img src="../assets/image/slides1.jpg" style={{height:"960px",maxWidth:"100%",objectFit:"cover"}} alt="" />
                           </div>
                        </div>
                        <div className="carousel-item">
                            <div className='img'>
                                <img src="../assets/image/slides2.jpg" style={{height:"960px",maxWidth:"100%",objectFit:"cover"}} alt="" />
                           </div>
                        </div>
                        <div className="carousel-item">
                            <div className='img'>
                                <img src="../assets/image/slides3.jpg" style={{height:"960px",maxWidth:"100%",objectFit:"cover"}} alt="" />
                           </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev fs-1 " type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
       </nav>
  )
}
