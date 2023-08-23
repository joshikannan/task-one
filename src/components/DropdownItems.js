import React from "react";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./NavBar.css";
const DropdownItems = ({ items }) => {
  return (
    <>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {index !== 0 && <div className="dropdown-divider"></div>}
          <NavDropdown.Item href={`#action/${3 + index}`}>
            {item.label}
          </NavDropdown.Item>
        </React.Fragment>
      ))}
    </>
  );
};

export default DropdownItems;
