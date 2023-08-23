import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Navdrop from "./Navdrop";
import DropdownData from "./DropdownData";
import "./NavBar.css";
function NavBar() {
  const [expanded, setExpanded] = useState(false);
  const [isResponsive, setIsResponsive] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsResponsive(window.innerWidth <= 768);
    };

    handleResize(); // Check initial screen width
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const navbarBackroundStyle = {
    background: isResponsive ? "white" : "#1a3067",
    fontSize: "19px",
  };

  const linkStyle1 = {
    color: "white",
    transition: "color 0.3s, text-decoration 0.3s", // Add a smooth color transition effect
    textDecoration: "none", // Remove underline initially
  };
  const linkStyle2 = {
    color: "white",
    transition: "color 0.3s, text-decoration 0.3s", // Add a smooth color transition effect
    textDecoration: "none", // Remove underline initially
  };
  const linkStyle3 = {
    color: "white",
    transition: "color 0.3s, text-decoration 0.3s", // Add a smooth color transition effect
    textDecoration: "none", // Remove underline initially
  };
  const linkStyle4 = {
    color: "white",
    transition: "color 0.3s, text-decoration 0.3s", // Add a smooth color transition effect
    textDecoration: "none", // Remove underline initially
  };
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);

  return (
    <Navbar expand="lg" style={navbarBackroundStyle}>
      <Container>
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              style={{
                ...linkStyle1,
                color: isHovered1 ? "green" : "white",
                textDecoration: isHovered1 ? "underline" : "none",
              }}
              onMouseEnter={() => setIsHovered1(true)}
              onMouseLeave={() => setIsHovered1(false)}
            >
              Home
            </Nav.Link>
            <Navdrop title="About Us" items={DropdownData.aboutUsItems} />
            <Navdrop title="Products" items={DropdownData.productItems} />
            <Navdrop title="Spares" items={DropdownData.sparesItems} />
            <Navdrop title="Our Works" items={DropdownData.ourworksItems} />
            <Nav.Link
              href="#link"
              className="navtext"
              style={{
                ...linkStyle2,
                color: isHovered2 ? "green" : "white",
                textDecoration: isHovered2 ? "underline" : "none",
              }}
              onMouseEnter={() => setIsHovered2(true)}
              onMouseLeave={() => setIsHovered2(false)}
            >
              Contact
            </Nav.Link>
            <Nav.Link
              href="#link"
              className="navtext"
              style={{
                ...linkStyle3,
                color: isHovered3 ? "green" : "white",
                textDecoration: isHovered3 ? "underline" : "none",
              }}
              onMouseEnter={() => setIsHovered3(true)}
              onMouseLeave={() => setIsHovered3(false)}
            >
              Partners
            </Nav.Link>
            <Nav.Link
              href="#link"
              className="navtext"
              style={{
                ...linkStyle4,
                color: isHovered4 ? "green" : "white",
                textDecoration: isHovered4 ? "underline" : "none",
              }}
              onMouseEnter={() => setIsHovered4(true)}
              onMouseLeave={() => setIsHovered4(false)}
            >
              Blog
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
