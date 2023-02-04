import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logoblancocarlos from './logoblancocarlos.png'
import './footer.css'

const Footer = () => {
    return (
        <footer>
  <section id="footer" className="container">
    <div className="container text-center text-md-start mt-5">
      <div className="row mt-3">
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          <a className='navbar-brand' href='#'>
          <img className='logo' src={logoblancocarlos} alt='My logo' />
        </a>  
        <p>
          I love developing challenging projects that feed me with more experience as a computer programmer 
          and make my clients happy with my work, don't hesitate to contact me.
          </p>
        </div>
     
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

          <div className='sitemap' style={{color:'#1e81b0'}}>
          <p>
            <a href="#home" className="text-reset">Home</a>
          </p>
          <p>
            <a href="#about" className="text-reset">About</a>
          </p>
          <p>
            <a href="#services" className="text-reset">Services</a>
          </p>
          <p>
            <a href="#experience" className="text-reset">Experience</a>
          </p>
          <p>
            <a href="#portfolio" className="text-reset">Portfolio</a>
          </p>
          <p>
            <a href="#contacts" className="text-reset">Contact</a>
          </p>
          </div>
        </div>
        
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4" >
        

          <div className='contactinfo' style={{color:'#1e81b0'}}>
          <p>Miami, FL 33135, US</p>
          <p>

             carlosalbertoitusa@gmail.com
          </p>
          <p> +1 786 973 9907</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <div className="text-center p-4" style={{backgroundColor: "rgba(0, 0, 0, 0.05)"}}>
    <p>© 2023 Copyright:</p>
    <a className="text-reset fw-bold" href="" style={{color:'1e81b0'}}>carlosalbertoitusa.github.io</a>
  </div>
 
</footer>
    )
}
export default Footer
