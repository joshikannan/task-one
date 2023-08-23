import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import footer_img from "../assets/footer-img.png";
import "./Footer.css";

export default function Footer() {
  const quickLinkData = [
    "About Us",
    "Company Profile",
    "Testimonial",
    "News and Events",
    "Blog",
    "Contact Us",
    "Terms of Use",
    "Quality Policy",
  ];
  const footerProductsData = [
    "Non Woven Bag Making Machine",
    "Bag Printing Machine",
    "Paper Stick Making Machine",
    "Paper Straw Making Machine",
    "PP Woven Sack Making Machine",
    "Paper Bag Making Machine",
    "PLA Straw Making Machine",
  ];
  const sparesData = [
    "Non Woven Machine Spares",
    "Ultrasonic Box",
    "Ultrasonic Transducer",
    "Ultrasonic Horn",
    "Stepper Drives",
    "Dovol Drives",
  ];

  return (
    <MDBFooter
      style={{ backgroundColor: "#0E0E22", color: "white" }}
      className="text-center text-lg-start text-muted"
    >
      <section className="footer-sectopn" style={{ color: "white" }}>
        <MDBContainer className="text-center text-md-start ">
          <MDBRow className="" style={{ paddingTop: "30px" }}>
            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4 ">
              <h4 className="text-uppercase fw-bold mb-4 " id="">
                About Us
              </h4>
              <p>
                Five Fingers Exports has emerged as a leading manufacturer of a
                wide range of high-quality packaging machines.
              </p>
              <h4 className="text-uppercase fw-bold mb-4">We Accept</h4>
              <img src={footer_img} style={{ margin: 0 }} />
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h4 className="text-uppercase fw-bold mb-4">Quick-Links</h4>
              {quickLinkData.map((data) => (
                <p>
                  <a
                    href="#!"
                    className="text-reset"
                    id="text-hover"
                    style={{ textDecoration: "none" }}
                  >
                    {data}
                  </a>
                </p>
              ))}
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h4 className="text-uppercase fw-bold mb-4">Our Products</h4>
              {footerProductsData.map((data) => (
                <p>
                  <a
                    href="#!"
                    className="text-reset"
                    style={{ textDecoration: "none" }}
                  >
                    {data}
                  </a>
                </p>
              ))}
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-md-0 mb-4">
              <h4 className="text-uppercase fw-bold mb-4">Spares</h4>
              {sparesData.map((data) => (
                <p>{data}</p>
              ))}
              <MDBIcon icon="twitter" className="me-3" />
              <MDBIcon icon="facebook" className="me-3" />
              <MDBIcon icon="instagram" className="me-3" />
              <MDBIcon icon="youtube" className="me-3" />
              <MDBIcon icon="linkedin" className="me-3" />
              <MDBIcon icon="gmail" className="me-3" />
            </MDBCol>
            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-md-0 mb-4">
              <h4 className="text-uppercase fw-bold mb-4">ADDRESS</h4>
              <p>
                <MDBIcon icon="building" className="me-1" /> Corporate Office
              </p>
              <p>
                Five Fingers Exports 468/6, Vellalore Road, Near Top Spin Tennis
                Court, Singanallur, Coimbatore – 641005, Tamil Nadu, India.
              </p>

              <p>
                <MDBIcon icon="phone" className="me-3" /> +91 9655286222
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> +91 9655222655
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> +91 9500617638
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                info@example.com
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgb(53, 55, 68)", color: "white" }}
      >
        © Copyright 2012 – 2023 | All Rights Reserved | Designed by Webnox
      </div>
    </MDBFooter>
  );
}
