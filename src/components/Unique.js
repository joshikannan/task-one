import React from "react";
import "./Unique.css";
import uni_img_1 from "../assets/unique-img-1.png";
import uni_img_2 from "../assets/unique-img-2.jpeg";
import uni_img_3 from "../assets/unique-img-3.jpeg";
import uni_icon_1 from "../assets/uni-icon-1.png";
import uni_icon_2 from "../assets/uni-icon-2.png";
import uni_icon_3 from "../assets/uni-icon-3.png";
import uni_icon_4 from "../assets/uni-icon-4.png";
import uni_icon_5 from "../assets/uni-icon-5.png";
import uni_icon_6 from "../assets/uni-icon-6.png";
import uni_background from "../assets/unique-background.svg";
const Unique = () => {
  return (
    <div className="unique">
      <div
        className="uni-row  uni-row-1"
        style={{
          backgroundImage: `url(${uni_background})`,
        }}
      >
        <div className="uni-col uni-col-1-1">
          <h1>
            WHAT MAKES US <br /> UNIQUE?
          </h1>
          <p>
            At Five Fingers Exports, we are dedicated to
            <br /> revolutionizing your packaging operations by
            <br /> delivering high-performance machines tailored
            <br /> to your specific needs. With our extensive
            <br /> range of state-of-the-art equipment, we
            <br /> provide innovative solutions for various industries.
          </p>
          <button className="export-btn">GET QUOTE → </button>
        </div>
        <div className="uni-col uni-col-1-2">
          <div className="uni-image-1">
            {" "}
            <img src={uni_img_1} />
          </div>
          <div className="uni-cards">
            <div className="uni-card uni-card-1">
              <img className="uni-icons" src={uni_icon_1} />
              <h4>Cutting-Edge Technology</h4>
              <p>
                Our commitment to delivering excellence drives us to stay at the
                forefront of industrial advancements.
              </p>
            </div>
            <div className="uni-card uni-card-2">
              {" "}
              <img className="uni-icons" src={uni_icon_2} />
              <h4>Customized Solutions</h4>
              <p>
                We believe that every business is unique, and we provide
                solutions that align with your specific needs.
              </p>
            </div>
            <div className="uni-card uni-card-3">
              {" "}
              <img className="uni-icons" src={uni_icon_3} />
              <h4>Comprehensive Support</h4>
              <p>
                We provide support from installation to maintenance, ensuring
                maximum uptime and operational efficiency.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="uni-row  uni-row-2">
        <div className="uni-col uni-col-2-1">
          <div className="uni-image-2">
            <img src={uni_img_2} />
          </div>
        </div>
        <div className="uni-col uni-col-2-2">
          <h1>Our Brand Story: A Journey of Innovation and Excellence</h1>
          <p>
            At Five Fingers Exports, our brand story is one of relentless
            pursuit of innovation and unwavering commitment to excellence. Since
            our establishment, we have been at the forefront of the packaging
            machinery industry, delivering cutting-edge solutions that empower
            businesses worldwide.
          </p>
          <button className="export-btn">EXPLORE MILESTONES → </button>
        </div>
      </div>
      <div className="uni-row  uni-row-3">
        <div className="uni-col uni-col-3-1">
          <h1>Straw Making Machine</h1>
          <p>
            Five Fingers Exports (An ISO: 9001 certified co.,) As more and more
            people become conscious of their environmental impact, the demand
            for paper straws has increased significantly. We, machine
            manufacturers, are responsible for designing and producing Straw
            Making Machines that can efficiently and effectively produce paper
            straws of various sizes and designs. We are known for advanced
            technology, which allows our machines to produce paper straws with a
            high level of precision and consistency.
          </p>
          <div className="uni-icons-row">
            <img className="uni-icons-col uni-icons-col-1" src={uni_icon_4} />
            <img className="uni-icons-col uni-icons-col-2" src={uni_icon_5} />
            <img className="uni-icons-col uni-icons-col-3" src={uni_icon_6} />
          </div>
          <button className="export-btn">READ MORE → </button>
        </div>
        <div className="uni-col uni-col-3-2">
          <h3>
            Our <span style={{ color: "var(--green)" }}>Featured Product</span>
          </h3>
          <div className="uni-image-3">
            <img src={uni_img_3} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Unique;
