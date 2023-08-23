import React from "react";
import status_img from "../assets/status.jpeg";
import "./Status.css";
import img1 from "../assets/status-img-1.png";
import img2 from "../assets/status-img-2.png";
import img3 from "../assets/status-img-3.png";
import img4 from "../assets/status-img-4.png";
const Status = () => {
  return (
    <div className="status" style={{ backgroundImage: `url(${status_img})` }}>
      <h2>Your One-Stop Solution for Packaging Machinery!</h2>
      <br />
      <h5>
        Our commitment to excellence ensures that every machine we deliver is of
        unmatched quality, reliability, and precision.
      </h5>
      <div className="status-card">
        <div className="status-card-1">
          <img src={img1} />
          <h1>12+</h1>
          <h5>Years of Experience</h5>
        </div>
        <div className="status-card-1">
          <img src={img2} />
          <h1>98%</h1>
          <h5>Timely Project Delivery</h5>
        </div>
        <div className="status-card-1">
          <img src={img3} />
          <h1>500+</h1>
          <h5>Skilled Employees</h5>
        </div>
        <div className="status-card-1">
          <img src={img4} />
          <h1>90%</h1>
          <h5>Client Retention Rate</h5>
        </div>
      </div>
    </div>
  );
};

export default Status;
