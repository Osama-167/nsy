import image from '../assets/image1.png'
import { Send } from '../assets/icons'
import { Link } from 'react-scroll'

const Hero = () => {
  return (
    <section id="hero">
      <div className="hero container">
        <div className="hero-content">
          <div className="content">
            <h1>
              Build & Launch Your Own <span style={{ color: '#007BFF' }}>CubeSat</span>
            </h1>
            <p>
              We help students, researchers, and universities design, build, and launch CubeSats — from idea to orbit — in less than a year.
            </p>
            <Link to="contact" smooth={true} duration={500}>
              <button>
                Get Started <Send />
              </button>
            </Link>
          </div>
          <div className="img">
            <img src={image} alt="Hero" />
          </div>
        </div>

        <div className="hero-cards">
          <div className="card">
            <h3>Project Development</h3>
            <p>
              Turn your satellite idea into a full mission plan — we guide you every step of the way.
            </p>
          </div>
          <div className="card">
            <h3>Technical Support</h3>
            <p>
              Our experts support your CubeSat design, testing, and system integration with hands-on advice.
            </p>
          </div>
          <div className="card">
            <h3>R&D and Training</h3>
            <p>
              Explore new technologies and gain practical skills through our space-focused training programs.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
