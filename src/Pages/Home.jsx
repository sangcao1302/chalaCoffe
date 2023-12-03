import React from 'react'
import "../Scss/home.scss"
import { NavLink} from 'react-router-dom'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function Home() {
    
    const handleClick=()=>{
        window.scrollTo({top:"0"})
        
    }
    const settings = {
       
        arrows:true,    
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade:true,
        swipeToSlide: true,
        autoplay:true,
        autoplaySpeed: 5000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              swipeToSlide: true,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              
              swipeToSlide: true,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              swipeToSlide: true,
              swiptouch:true
            }
          }
        ]
      }
    
  return (
    <div className='container-fluid p-0'> 
        <Slider {...settings} className='slide' style={{objectFit:"cover"}}>
            <div>
                <img src="../assets/image/slides1.jpg" className="img" alt=""  />
            </div>
            <div>
                <img src="../assets/image/slides2.jpg" className="img" alt=""  />
            </div>
            <div>
                <img src="../assets/image/slides3.jpg" className="img" alt=""  />
            </div>
        </Slider>
        <div className='section mt-5'>
            <div className='container mt-5 w-100'>
                <div className='row'>
                    <div className='col-12 col-sm-12 col-md-12'>
                        <div className='row'>
                            <div className='col-12 col-sm-6 col-md-6'>
                                <div className='text-about'>
                                    <h3>About Us</h3>
                                    <h1>We Combine Classics and Modernity</h1>
                                    <p>We appreciate your trust greatly. Our clients choose us and our products because they know we are the best.</p>
                                    <NavLink  className=" btn btn-about mb-5" to={"/about"} onClick={handleClick}>Read more</NavLink>
                                </div>
                            </div>
                            <div className='col-12 col-sm-6 col-md-6'>
                                <div className="image-stack">
                                    <div className="image-stack__item image-stack__item--top">
                                        <img src="../assets/image/about2.jpg" alt="" />
                                    </div>
                                    <div className="image-stack__item image-stack__item--bottom">
                                        <img src="../assets/image/about3.jpg" alt="" />
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
                                            <NavLink className="btn btn-serve" to={"/serve"} onClick={handleClick}>Read more</NavLink>
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
        
    </div>
  )
}
