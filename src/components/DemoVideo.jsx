import React from "react";
import video from "../assets/video.mp4";
import "../App.css";

export default function DemoVideo() {
  return (
    <div className="demo-video-section">
      <div className="video-text">
        <h2>See NSY in Action</h2>
        <p>Watch a quick demo to explore how Nano Satellite Yard empowers space research and student innovation.</p>
      </div>
      <div className="video-container">
        <video className="nsy-video" controls controlsList="nodownload">
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}