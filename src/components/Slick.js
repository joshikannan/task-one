import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Slick.css";
import slick_card_img1 from "../assets/slick-card-img1.png";
import slick_card_img2 from "../assets/slick-card-img2.png";
import slick_card_img3 from "../assets/slick-card-img3.png";
import slick_card_img4 from "../assets/slick-card-img4.png";
import slick_card_img5 from "../assets/slick-card-img5.png";
import slick_card_img6 from "../assets/slick-card-img6.png";

const Slick = () => {
  const slickImages = [
    slick_card_img1,
    slick_card_img2,
    slick_card_img3,
    slick_card_img4,
    slick_card_img5,
    slick_card_img6,
    slick_card_img1,
    slick_card_img2,
    slick_card_img3,
    slick_card_img4,
    slick_card_img5,
    slick_card_img6,
    slick_card_img1,
    slick_card_img2,
    slick_card_img3,
    slick_card_img4,
    slick_card_img5,
    slick_card_img6,
    slick_card_img1,
    slick_card_img2,
    slick_card_img3,
    slick_card_img4,
  ];
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="slick">
      <h2 className="slick-text">
        Our <span style={{ color: "green" }}>Prestigious</span> Clients{" "}
      </h2>
      <Carousel responsive={responsive} className="slick-image">
        {slickImages.map((image) => (
          <img src={image} style={{ border: "1px solid rgb(238, 238, 238)" }} />
        ))}
      </Carousel>
    </div>
  );
};

export default Slick;
