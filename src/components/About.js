import React from 'react'
import about from '../assets/about.png'

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="about">
          <h1>Launch Your CubeSat Journey with NSY</h1>
          <div className="about-content">
            <img src={about} alt="CubeSat" />
            <div className="content">
              <p>
                At <strong>Nano Satellite Yard (NSY)</strong>, we help universities, students, and researchers design, build, and launch a complete CubeSat in under one year — from concept to orbit.
              </p>
              <p>
                Founded in January 2024, NSY is a forward-thinking startup specializing in CubeSat technology and space solutions. Here's what we offer:
              </p>
              <ul>
                <li>Custom design and manufacturing of key subsystems like EPS (Electrical Power Systems)</li>
                <li>Full technical support throughout the CubeSat development cycle</li>
                <li>Advanced solar energy and UPS system solutions</li>
                <li>Hands-on training in electronics and mechanical design</li>
              </ul>
              <p>
                Our mission is to empower the next generation of engineers and innovators by providing accessible, high-quality space technology and real-world engineering solutions.
              </p>
              <button
                onClick={() => window.location.href = "#contact"}
                style={{
                  marginTop: '20px',
                  padding: '10px 20px',
                  fontSize: '16px',
                  backgroundColor: '#007BFF',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer'
                }}
              >
                Book a Free Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
