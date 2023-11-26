import React from 'react'
import "../Scss/home.scss"
import { NavLink } from 'react-router-dom'
export default function Home() {
  return (
    <div className='container-fluid mt-5 p-0'>
        
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
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
        
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-12 col-sm-12 col-md-12'>
                    <div className='row'>
                        <div className='col-12 col-sm-6 col-md-6'>
                            <div className='text-about'>
                                <h3>About Us</h3>
                                <h1>We Combine Classics and Modernity</h1>
                                <p>We appreciate your trust greatly. Our clients choose us and our products because they know we are the best.</p>
                                <NavLink  className=" btn btn-about mb-5" to={"/about"}>Read more</NavLink>
                            </div>
                        </div>
                        <div className='col-12 col-sm-6 col-md-6'>
                            <div className="image-stack">
                                <div className="image-stack__item image-stack__item--top">
                                    <img src="../assets/image/about2.jpg" alt />
                                </div>
                                <div className="image-stack__item image-stack__item--bottom">
                                    <img src="../assets/image/about3.jpg" alt />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       <div className='container'>
            <div className='serve mt-5'>
                    <h3 className='text-center'>We Serve</h3>
                    <div className='text-serve mt-5'>
                        <div className='row'>
                            <div className='col-12 col-sm-6 col-md-6 mb-5'>
                                <div className='serve-img'>
                                    <div className='img-under'>
                                        <img src="../assets/image/coffee.png" alt="" />
                                    </div>
                                    <div className='img-top'>
                                        <img src="../assets/image/camping.jpg" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className='col-12 col-sm-6 col-md-6'>
                                <div className='serve-item'>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat autem excepturi libero vero dolor odio consequatur nesciunt eveniet repudiandae totam, vitae quas modi nostrum doloremque enim quasi maxime inventore itaque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat autem excepturi libero vero dolor odio consequatur nesciunt eveniet repudiandae totam, vitae quas modi nostrum doloremque enim quasi maxime inventore itaque</p>
                                    <NavLink className="btn btn-serve" to={"/serve"}>Read more</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>   
                </div>
       </div>
        <div className='img mt-5'>
            <h3 className='text-center mb-5'>Memory</h3>
            <div className='img-place'>
                <div className='row'>
                    <div className='col-12 col-sm-8 col-md-6 p-0'>
                        <div className='img-left'>
                             <div className='img-item'>
                                <img src="../assets/image/images2.jpg" alt="" />
                             </div>
                        </div>
                    </div>
                    <div className='col-12 col-sm-4 col-md-6'>
                        <div className='img-right'>
                            <div className='row'>
                                <div className='col-12 col-sm-6 col-md-6 p-0'>
                                   <div className='img-right-item'>
                                        <div className='img-item'>
                                            <img src="../assets/image/images1.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className='col-12 col-sm-6 col-md-6 p-0'>
                                   <div className='img-right-item'>
                                        <div className='img-item'>
                                            <img src="../assets/image/images3.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className='col-12 col-sm-6 col-md-6 p-0'>
                                   <div className='img-right-item'>
                                        <div className='img-item'>
                                            <img src="../assets/image/images4.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className='col-12 col-sm-6 col-md-6 p-0'>
                                   <div className='img-right-item'>
                                        <div className='img-item'>
                                            <img src="../assets/image/images5.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
