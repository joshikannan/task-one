import React from "react";
import NavDropdown from "react-bootstrap/NavDropdown";
const Navdrop = (props) => {
  const dropdownItemStyle = {
    color: "white", // Set the desired text color
  };
  return (
    <NavDropdown
      title={props.title}
      id="basic-nav-dropdown"
      className="custom-dropdown-title"
    >
      <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
      <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
      <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
    </NavDropdown>
  );
};

export default Navdrop;
