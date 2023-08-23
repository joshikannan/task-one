import React from "react";
import "./Products.css";
import pro_img1 from "../assets/pro-img-1.png";
import pro_img2 from "../assets/pro-img-2.png";
import pro_img3 from "../assets/pro-img-3.jpeg";
import pro_img4 from "../assets/pro-img-4.jpeg";
import pro_img5 from "../assets/pro-img-5.jpeg";
import pro_img6 from "../assets/pro-img-6.jpeg";

const Products = () => {
  const cardData = [
    {
      id: 0,
      title: "Paper straw making machine",
      imgSrc: pro_img1,
    },
    {
      id: 1,
      title: "Paper bag making machine",
      imgSrc: pro_img2,
    },
    {
      id: 2,
      title: "Non woven bag making machine",
      imgSrc: pro_img3,
    },
    {
      id: 3,
      title: "PP woven sack making machine",
      imgSrc: pro_img4,
    },
    {
      id: 4,
      title: "Bag printing machine",
      imgSrc: pro_img5,
    },
    {
      id: 5,
      title: "Paper stick making machine",
      imgSrc: pro_img6,
    },
  ];
  return (
    <div className="products">
      <h1 className="pro-head-text">
        Spotlight on Excellence –
        <span style={{ color: "green" }}>Our Popular Products</span>
      </h1>
      <div className="pro-cards">
        {cardData.map((data, index) => (
          <div className="pro-card" key={index}>
            <div
              className="pro-card-image"
              style={{
                backgroundImage: `linear-gradient(147deg, rgba(26, 48, 103, 0.45) 0%, rgba(26, 48, 103, 0.45) 100%), url(${data.imgSrc})`,
              }}
            >
              <div className="pro-card-content">
                <img
                  src="your-icon-path.png"
                  alt="Icon"
                  className="pro-card-icon"
                />
                <p className="pro-card-text">{data.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
