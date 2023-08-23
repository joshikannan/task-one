import React from "react";
import "../components/Header.css";
import "bootstrap/dist/css/bootstrap.css";
import Image from "../img/Five-Fingers-Exports-Packaging-and-Printing-Machine-Manufacturers-from-India-400x141.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NavBar.css";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header-one">
          <div className="text text-blue">Live Demo Available !</div>
          <div className="text text-blue right">
            We supply machines worldwide with &nbsp;
            <div className="text text-green">
              FREE installation and training!
            </div>
            <div className="cnt-btn number">+91 9655286222</div>
            <div className="cnt-btn enquire">Enquire Us</div>
          </div>
        </div>
        <div className="header-two">
          <div className="header_img">
            <img src={Image} alt="header_img" className="header_img" />
          </div>
          <NavBar />
        </div>
      </div>
    </>
  );
};

export default Header;
