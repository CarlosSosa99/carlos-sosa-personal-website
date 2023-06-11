import React from 'react'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import logoblancocarlos from './logoblancocarlos.png'
import './navbar.css'

const navbar = () => {
  const navLinks = [
    'home',
    'about',
    'services',
    'experience',
    'portfolio',
    'contacts',
  ]
  return (
    <nav id="navbar" className='navbar navbar-expand-lg navbar-light bg-white'>
      <div className='container'>
        <a className='navbar-brand' href=''>
          <img className='logo' src={logoblancocarlos} alt='My logo' />
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <FontAwesomeIcon icon={faBars} style={{ color: '#1e81b0' }} />
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav ms-auto mb-2 mb-lg-0' style={{color: '#309da4' }}>
          <li className="nav-item">
          <a className="nav-link" href='#home' >Home</a>
          </li>
          <li className="nav-item">
          <a className="nav-link" href='#about' >About</a>
          </li>
          <li className="nav-item">
          <a className="nav-link" href='#services' >Services</a>
          </li>
          <li className="nav-item">
          <a className="nav-link" href='#experience' >Experience</a>
          </li>
          <li className="nav-item">
          <a className="nav-link" href='#portfolio' >Portfolio</a>
          </li>
          <li className="nav-item">
          <a className="nav-link" href='#contacts' >Contact</a>
          </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default navbar
