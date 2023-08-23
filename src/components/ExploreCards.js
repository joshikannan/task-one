import React from "react";
import "./ExploreCards.css";
import explore_img_1 from "../assets/explore-img-1.jpeg";
import explore_img_2 from "../assets/explore-img-2.jpeg";
import explore_img_3 from "../assets/explore-img-3.jpeg";
import explore_img_4 from "../assets/explore-img-4.jpeg";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardText,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
const ExploreCards = () => {
  const exploreData = [
    {
      imgSrc: explore_img_1,
      text: " Why paper straws are better answer for suatainability",
    },
    {
      imgSrc: explore_img_2,
      text: " Requirement for making paper bags",
    },
    {
      imgSrc: explore_img_3,
      text: "  Does the printed bags support the business",
    },
    {
      imgSrc: explore_img_4,
      text: "  Is non woven bags Making Business profitable",
    },
  ];
  return (
    <div className="exploreCards">
      <h1>
        Explore <span style={{ color: `var(--green)` }}>Fascinating Blogs</span>
      </h1>
      <MDBRow className="row-cols-1 row-cols-md-4 g-4">
        {exploreData.map((data) => (
          <MDBCol>
            <MDBCard className="mi-card">
              <MDBCardImage
                src={data.imgSrc}
                alt="..."
                position="top"
                className="mi-image"
              />
              <MDBCardBody>
                <MDBCardText>{data.text}</MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        ))}
      </MDBRow>
      <div className="explore-btn">
        {" "}
        <button className="export-btn">VIEW ALL → </button>
      </div>
    </div>
  );
};
export default ExploreCards;
