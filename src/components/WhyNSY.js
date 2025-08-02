import React from "react";
import DemoVideo from "../components/DemoVideo";
import "../App.css";

export default function WhyNSY() {
  return (
    <div className="why-nsy-page">

      <div className="section-box">
        <h2>Why Choose NSY?</h2>
        <p>
          We make space education accessible and practical – perfect for students,
          researchers, and universities looking to engage with real-world satellite technology.
        </p>
      </div>

      <div className="section-box">
        <h3>What We Provide</h3>
        <ul>
          <li>Full roadmap to build your own educational or research CubeSat.</li>
          <li>Hands-on technical training from beginner to advanced.</li>
          <li>Ground-based simulation models to visualize and test your satellite.</li>
          <li>University and research team partnerships for real impact.</li>
        </ul>
      </div>

      <div className="section-box">
        <h3>See It In Action</h3>
        <p>Watch this quick demo to get a feel for what we do at NSY.</p>
        <DemoVideo />
      </div>

    </div>
  );
}
