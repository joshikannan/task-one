import React from "react";
import card_img_1 from "../assets/card-img-1.png";
import card_img_2 from "../assets/card-img-2.png";
import card_img_3 from "../assets/card-img-3.png";
import "./Card.css";

const Card = () => {
  const cardItems = [
    {
      imgSrc: card_img_1,
      title: "Global Reach",
      description:
        "Our global network of satisfied customers makes us a trusted name in the packaging machinery industry.",
    },
    {
      imgSrc: card_img_2,
      title: "Unparalleled Expertise",
      description:
        "We tailor our solutions to meet your unique business requirements, ensuring reliability and efficiency.",
    },
    {
      imgSrc: card_img_3,
      title: "Unrivaled Quality",
      description:
        "Our commitment to quality ensures machinery that consistently delivers exceptional performance.",
    },
  ];

  return (
    <div className="card">
      {cardItems.map((item, index) => (
        <div className="card-0">
          <img src={item.imgSrc} alt="card-img" />
          <div className="card-text">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
