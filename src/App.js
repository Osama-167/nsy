import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
// import About from './components/About'
// import Services from './components/Services'
import Contact from './components/Contact'
// import Footer from './components/Footer'
import './App.css'
import Footer from './components/Footer'
import About from './components/About'
import CEO from './components/CEO'
import NewCEO from './components/NewCEO'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import HowItWorks from './components/HowItWorks'
import FAQ from './components/FAQ'
import WhyNSY from "./components/WhyNSY"; 
import Certificates from "./components/Certificates"; 





function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <HowItWorks />
       <FAQ />
       <WhyNSY />
       <Certificates />

      {/* <CEO /> */}
      <NewCEO />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
