import React from 'react'
import eps from '../assets/eps.webp'
import components from '../assets/components.jpg'
import support from '../assets/Support.jpg'
import support2 from '../assets/Support2.jpg'
import training from '../assets/training.webp'
import solar from '../assets/solarSystem.jpg'
import ups from '../assets/ups.webp'

const Services = () => {
  return (
    <section className="services" id="services">
      <h1 className="heading"><span>Our</span> Services</h1>
      <p className="caption">
        We support your journey from CubeSat idea to orbit with end-to-end solutions tailored for students, researchers, and universities.
      </p>

      <div className="services-container">
        <div className="service">
          <img src={eps} alt="CubeSat Design & EPS" />
          <h3>CubeSat Design & EPS</h3>
          <p>Design and build CubeSat structures and electrical power systems with hands-on training and testing support.</p>
        </div>

        <div className="service">
          <img src={components} alt="Components Supply" />
          <h3>Essential Components Supply</h3>
          <p>Reliable and tested satellite parts — from frames and solar panels to avionics — delivered for your mission.</p>
        </div>

        <div className="service">
          <img src={support} alt="Mission Design Support" />
          <h3>Mission Design Support</h3>
          <p>From concept to orbit — we help you plan and engineer every step of your satellite mission.</p>
        </div>

        <div className="service">
          <img src={support2} alt="Technical Consultation" />
          <h3>Technical Consultation</h3>
          <p>Stuck with integration or testing? Our team offers fast technical help tailored for student teams and labs.</p>
        </div>

        <div className="service">
          <img src={training} alt="Training Programs" />
          <h3>Training & Education</h3>
          <p>Certified programs in CubeSat engineering, integration, and testing — perfect for students and researchers.</p>
        </div>

        <div className="service">
          <img src={solar} alt="Solar Power Systems" />
          <h3>Solar Power Systems</h3>
          <p>Space-ready solar solutions for CubeSats and research labs — high-efficiency and easy to integrate.</p>
        </div>

        <div className="service">
          <img src={ups} alt="UPS & Lab Power" />
          <h3>Custom UPS & Lab Power</h3>
          <p>Keep your lab running with backup UPS units designed specifically for space-related testing environments.</p>
        </div>
      </div>
    </section>
  )
}

export default Services
