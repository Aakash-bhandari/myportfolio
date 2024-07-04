import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,

  AiFillInstagram,
  AiFillFacebook,

} from "react-icons/ai";
import { FaLinkedinIn,FaWhatsapp } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Aakash Bhandari</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} AB</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                 href="https://github.com/Aakash-Bhandari"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/aakash-bhandari-4b1355252/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://api.whatsapp.com/send/?phone=%2B919561651710&text=Hello,+Aakash"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaWhatsapp />
              </a>
            </li>
            <li className="social-icons">
              <a
                 href="https://www.instagram.com/_______________ak_/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
