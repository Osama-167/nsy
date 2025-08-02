// HowItWorks.js
import React from "react";
import logo from "../assets/logo.png";

const steps = [
  {
    title: "1. Book a Free Consultation",
    description:
      "Schedule a call with our experts to discuss your mission idea and goals.",
    image: logo,
  },
  {
    title: "2. Define Mission Goals",
    description:
      "We work together to define the scope, timeline, and expected outcomes of your CubeSat mission.",
    image: logo,
  },
  {
    title: "3. CubeSat Design & Testing",
    description:
      "Our engineers assist in designing, assembling, and testing your CubeSat using state-of-the-art facilities.",
    image: logo,
  },
  {
    title: "4. Launch Coordination",
    description:
      "We handle launch logistics and integration with international partners to get your CubeSat to space.",
    image: logo,
  },
  {
    title: "5. Post-Launch Support",
    description:
      "Receive ongoing technical support, data access, and mission analysis after deployment.",
    image: logo,
  },
];

export default function HowItWorks() {
  return (
    <div className="how-it-works-container">
      <h2 className="how-title">How It Works</h2>
      <p className="how-subtitle">
        From consultation to launch, we make your space dream achievable.
      </p>
      <div className="steps-grid">
        {steps.map((step, index) => (
          <div className="step-card" key={index}>
            <img src={step.image} alt={step.title} className="step-img" />
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>

      <div className="how-extra-text">
        <h3>What's Next?</h3>
        <p>
          This section will provide more detailed information about each stage
          of the mission process, technical specs, and timelines. Stay tuned!
        </p>
      </div>
    </div>
  );
}
