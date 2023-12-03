import React, { useEffect } from 'react'
import '../Scss/header.scss'
import {NavLink} from "react-router-dom"
export default function Header() {
    
   const changeWidth=()=>{

    if(window.innerWidth>768){
        return(
            <div className='row align-items-center'>
                <div className='col-md-9 col-sm-9'>
                    <div className='logo'>
                        <NavLink className='logo-item' to={"/home"}>
                            <img src="../assets/image/logo2.png" alt="" />
                        </NavLink>
                    </div>       
                </div>
            
                 <div className='col-md-3 col-sm-3'>
                   <div className='d-flex justify-content-end mt-4'>
                    <button className="btn border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions"><i className="fa fa-align-justify" style={{color:'orange'}}></i></button>
                    <div className="offcanvas offcanvas-end" data-bs-scroll="true" tabIndex={-1} id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                        <div className="offcanvas-heade">
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <NavLink className='logo d-flex justify-content-center' to={"/home"}>
                            <img src="../assets/image/logo2.png" className='logo-menu' alt="" />
                        </NavLink>
                        <ul className='menu-reponsive mt-5 fs-5'>
                        <NavLink to={"/home"}  className="item-menu"><li className='menu-item '>Home</li></NavLink>
                        <NavLink to={"/about"}  className="item-menu"><li className='menu-item '>About Us</li></NavLink>
                        <NavLink to={"/Serve"}  className="item-menu"><li className='menu-item '>Serve</li></NavLink>
                        <NavLink to={"/Memory"}  className="item-menu"><li className='menu-item '>Memory</li></NavLink>
                        <NavLink to={"/blog"}     className="item-menu"><li className='menu-item '>Blog</li></NavLink>
                        <NavLink to={"/contact"}  className="item-menu"><li className='menu-item '>Contact</li></NavLink>
                      </ul>
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
                    <div className='logo-mobile'>
                        <NavLink className='logo-mobile-item' to={"/home"}>
                            <img src="../assets/image/logo2.png" alt="" />
                        </NavLink>
                    </div>
                    </div>
                    <div className='col-6 mt-4'>
                    <div className='d-flex text-start justify-content-end mx-4' style={{zIndex:"999"}}>
                        <button className="btn border border-0 btn-mobile" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions" style={{color:"orange"}}><i className="fa fa-align-justify"></i></button>
                        <div className="offcanvas offcanvas-end" data-bs-scroll="true" tabIndex={-1} id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                            <div className="offcanvas-header d-flex justify-content-end">
                                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div className='logo-mobile w-100 d-flex justify-content-center'>
                                <img src="../assets/image/logo2.png"  style={{maxWidth:"50%"}}alt="" />
                            </div>
                            <ul className='menu-reponsive mt-5 fs-5 text-decoration-none'>
                                <NavLink to={"/home"}  className="item-menu"><li className='menu-item '>Home</li></NavLink>
                                <NavLink to={"/about"}  className="item-menu"><li className='menu-item '>About Us</li></NavLink>
                                <NavLink to={"/Serve"}  className="item-menu"><li className='menu-item '>Serve</li></NavLink>
                                <NavLink to={"/Memory"}  className="item-menu"><li className='menu-item '>Memory</li></NavLink>
                                <NavLink to={"/blog"}  className="item-menu"><li className='menu-item '>Blog</li></NavLink>
                                <NavLink to={"/contact"}  className="item-menu"><li className='menu-item '>Contact</li></NavLink>
                            </ul>
                        </div>
                    </div>
                    </div>
                </div>
          
            
        )
    }
   }
  
 
  return (
       <div className='container-fluid mobile-header'>
            <div className='container'  >
               {changeWidth()}
            </div> 
            
       </div>
  )
}
