import React from "react";
import export_img from "../assets/exports-img.png";
import "./Exports.css";
const Exports = () => {
  const green = {
    color: "green",
    fontWeight: "bold",
  };
  return (
    <div className="exports">
      <img src={export_img} />
      <div className="exports-text">
        <h1>FIVE FINGERS EXPORTS</h1>
        <p
          className="exports-para"
          style={{ lineHeight: 1.7, fontSize: "16px" }}
        >
          Established in 2011, Five Fingers Exports has emerged as a leading
          manufacturer of a wide range of high-quality packaging machines. Based
          in Coimbatore, Tamil Nadu, India, we operate as a Partnership firm and
          have been providing top-notch products to various sectors. With a
          widespread factory of 35,000 Sq ft and highly trained technical
          professionals to support our global customers with all kinds of needs
          which includes spares, services, and customer support. With our
          expertise and commitment to excellence, we have become a trusted name
          in the industry. We provide innovative solutions for various
          industries, including <span style={green}>paper bag</span>{" "}
          manufacturing, <span style={green}>non-woven bag</span>
          production, <span style={green}>PP woven bag</span> making,{" "}
          <span style={green}>paper straw maker</span>, and{" "}
          <span style={green}>paper stick creation</span>. We specialize in
          providing various <span style={green}>nonwoven machine spares</span>
          with different specifications.
        </p>
        <div className="count-row">
          <div className="count-col count-col-1">
            <h1>4000 +</h1>
            <p>Statisfied Clients</p>
          </div>
          <div className="count-col count-col-2">
            <h1>5000 +</h1>
            <p>Units Sold </p>
          </div>
          <div className="count-col count-col-3">
            <h1>24*7 +</h1>
            <p>Supports Available</p>
          </div>
        </div>
        <div>
          <button className="export-btn">Read More → </button>
        </div>
      </div>
    </div>
  );
};

export default Exports;
