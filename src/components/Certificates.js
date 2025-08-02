import React from "react";
import pharosLogo from "../assets/pharos.jpg";
import alexLogo from "../assets/alex.jpg";
import aastmtLogo from "../assets/acadmic.png";
import iso9001 from "../assets/iso1.jpg";
import iso14001 from "../assets/iso2.png";
import "../App.css";

export default function Certificates() {
  return (
    <div className="certificates-page">
      <h2 className="page-title">Certificates & Collaborations</h2>

      <section className="certificates-section">
        <h3>Certificates</h3>
        <div className="logos-grid">
          <img src={iso9001} alt="ISO 9001 Certificate" />
          <img src={iso14001} alt="ISO 14001 Certificate" />
        </div>
      </section>

      <section className="collaborators-section">
        <h3>Our Academic Collaborators</h3>
        <div className="logos-grid">
          <img src={pharosLogo} alt="Pharos University" />
          <img src={alexLogo} alt="Alexandria University" />
          <img src={aastmtLogo} alt="Arab Academy for Science and Technology" />
        </div>
      </section>
    </div>
  );
}