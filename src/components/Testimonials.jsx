import React from 'react';
import logo from '../assets/logo.png'; // صورة مؤقتة بدل صور الأشخاص

const Testimonials = () => {
  return (
    <section className="services" id="testimonials">
      <h1 className="heading"><span>What</span> They Say</h1>
      <p className="caption">
        Real feedback from our clients, students, and partners about their experience with NSY.
      </p>

      <div className="services-container">
        <div className="service">
          <img src={logo} alt="User 1" />
          <h3>Dr. Amr Khaled</h3>
          <p>"NSY provided our university with all the components and technical support we needed to build our CubeSat."</p>
        </div>

        <div className="service">
          <img src={logo} alt="User 2" />
          <h3>Sara Mahmoud</h3>
          <p>"As a student, the training program was amazing — hands-on, detailed, and supportive throughout."</p>
        </div>

        <div className="service">
          <img src={logo} alt="User 3" />
          <h3>Eng. Tarek Mostafa</h3>
          <p>"Their consultation saved our team weeks of work. Truly responsive and helpful!"</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
