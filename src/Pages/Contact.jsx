import React from 'react'
import "../Scss/contact.scss"
export default function Contact() {
  return (
    <div className='container-fluid p-0'>    
        <div className='img-contact d-flex justify-content-center align-items-center'>
           <h1>Contact</h1>
        </div> 
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6 col-sm-3 col-md-3'>
                    <div className='info'>
                        <h2>Contact Detail</h2>
                        <p className='mt-4'>Chà Là Coffe</p>
                        <p>abc@gmail.com</p>
                        <p>0980980980</p>
                    </div>
                   
                </div>
                <div className='col-6 col-sm-9 col-md-9'>
                    <form className='form-list'>        
                        <div className="mb-5">
                             <span className='d-flex align-items-center'><i className="fa fa-envelope"></i><input type="email" placeholder='Email address' /></span>
                        <hr />
                        </div>
                        <div className="mb-3">    
                            <span className='d-flex '><i className="fa fa-pen mt-3"></i><textarea className="w-100" placeholder='How can we help you?' rows="5" /></span>
                            <hr />
                        </div>
                       
                        <button type="submit" className="btn">Submit</button>    
                    </form>
                </div>
            </div>
        </div>
        
       {/* <div className='container'>
        <p>Tuyển Dụng</p>
        <p></p>
       </div> */}
     </div>
  )
}
