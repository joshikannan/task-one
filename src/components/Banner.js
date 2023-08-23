import Carousel from "react-bootstrap/Carousel";
import React from "react";
import carousal_img1 from "../assets/one.png";
import carousal_img2 from "../assets/two.png";
import carousal_img3 from "../assets/three.png";
import "./Banner.css";
const Banner = () => {
  const h3_textStyle = {
    color: "#00A85A",
  };

  return (
    <div className="parent">
      <Carousel slide={false}>
        <Carousel.Item className="carousal-0">
          <div className="carousel-content">
            <div className="carousal-image-container">
              <img
                src={carousal_img2}
                alt="carousal_img2"
                className="img-fluid"
              />
            </div>
            <Carousel.Caption className="carousal-2">
              <h3 style={h3_textStyle}>
                SQUARE BOTTOM PAPAER BAG MAKING MACHINE
              </h3>
              <p>
                Ultimate Square Bottom Bag Making Machine: Stylish Bag Creation
                at 200 Pcs/min.
              </p>
              <button className="carousal-btn">FIND OUT MORE</button>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
        <Carousel.Item className="carousal-0">
          <div className="carousel-content">
            <div className="carousal-image-container">
              <img
                src={carousal_img3}
                alt="carousal_img3"
                className="img-fluid"
              />
            </div>
            <Carousel.Caption className="carousal-2">
              <h3 style={h3_textStyle}>NON WOVEN BAG MAKING MACHINE</h3>
              <p>
                Upgrade your Bag Production Process Instantly - Easily Produce
                W-cut, U-cut, D-cut, and Box Bags
              </p>
              <button className="carousal-btn">FIND OUT MORE</button>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
        <Carousel.Item className="carousal-0">
          <div className="carousel-content">
            <div className="carousal-image-container">
              <img
                src={carousal_img1}
                alt="carousal_img1"
                className="img-fluid"
              />
            </div>
            <Carousel.Caption className="carousal-2 ">
              <h3 style={h3_textStyle}>
                INDIA FIRSR PAPAER STRAW MAKING MACHINE
              </h3>
              <p>
                Intelligent Straw Production Line: Revolutionize Paper Straw
                Production
              </p>
              <button className="carousal-btn">FIND OUT MORE</button>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
