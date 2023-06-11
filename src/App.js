import './App.css'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/navbar/navbar'
import Header from './components/header/Header'
import AboutMe from './components/about/AboutMe'
import Services from './components/services/Services'
import Experience from './components/experience/Experience'
import Portfolio from './components/portfolio/Portfolio'
import Contacts from './components/contacts/Contacts'
import Footer from  './components/footer/Footer'

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <AboutMe />
      <Services />
      <Experience />
      <Portfolio />
      <Contacts/>
      <Footer/>
    </>
  )
}

export default App
