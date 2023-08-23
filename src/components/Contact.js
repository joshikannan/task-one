import React from "react";
import "./Contact.css";
import enquire_img_1 from "../assets/enquire-img-1.png";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import FloatingLabel from "react-bootstrap/FloatingLabel";
const producuData = [
  "Paper Straw making machine",
  "Paper big bag making machine",
  "Non Woven bag making machine",
  "PP woven sack making machine",
  "Bag printing machine",
  "Paper stick making machine",
  "Compostable LPA straw making machine",
];
const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-left">
        <img src={enquire_img_1} />
        <h4>Get in Touch: Let’s Start a Packaging Partnership!</h4>
        <p>
          Reach out to us today to request a quote. Let’s find the perfect{" "}
          <br />
          packaging machinery solution for your business.
        </p>
        <button className="export-btn">REQUEST TO CALL → </button>
      </div>
      <div className="contact-right">
        <Form>
          <Row>
            <Col md className="input-feild">
              <FloatingLabel controlId="floatingInputGrid" label="Your Name">
                <Form.Control type="email" placeholder="name@example.com" />
              </FloatingLabel>
            </Col>
            <Col md className="input-feild">
              <FloatingLabel controlId="floatingInputGrid" label="Phone Number">
                <Form.Control type="email" placeholder="name@example.com" />
              </FloatingLabel>
            </Col>
          </Row>
          <Row>
            <Col md className="input-feild">
              <FloatingLabel
                controlId="floatingInputGrid"
                label="Email address"
              >
                <Form.Control type="email" placeholder="name@example.com" />
              </FloatingLabel>
            </Col>
            <Col md className="input-feild">
              <FloatingLabel controlId="floatingSelectGrid" label="">
                <Form.Select aria-label="Floating label select example">
                  <option>Your product</option>
                  {producuData.map((data) => (
                    <option value="1">{data}</option>
                  ))}
                </Form.Select>
              </FloatingLabel>
            </Col>
          </Row>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Control
              as="textarea"
              placeholder="Your Requirements"
              rows={3}
              className="input-feild"
            />
          </Form.Group>
        </Form>
        <button className="export-btn">ENQUIRE NOW→ </button>
      </div>
    </div>
  );
};

export default Contact;
