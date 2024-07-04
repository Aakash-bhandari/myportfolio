import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { FaLinkedinIn, FaWhatsapp, FaGithub, FaInstagram, FaMailBulk } from "react-icons/fa";

function Home2() {
  const iconStyles = {
    linkedin: { color: '#0077b5' },
    whatsapp: { color: '#25d366' },
    github: { color: '#333' },
    instagram: { color: '#E4405F' },
  };
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        {/* <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> C++, Javascript and Go. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web Technologies and Products </b> and
                also in areas related to{" "}
                <b className="purple">
                  Blockchain.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row> */}
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/aakash-bhandari-4b1355252/"
                  target="_blank"
                  rel="noreferrer"
                  className="home-social-icons"
                  style={iconStyles.linkedin}
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://api.whatsapp.com/send/?phone=%2B919561651710&text=Hello,+Aakash"
                  target="_blank"
                  rel="noreferrer"
                  className="home-social-icons"
                  style={iconStyles.whatsapp}
                >
                  <FaWhatsapp />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://github.com/Aakash-Bhandari"
                  target="_blank"
                  rel="noreferrer"
                  className="home-social-icons"
                  style={iconStyles.github}
                >
                  <FaGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/_______________ak_/"
                  target="_blank"
                  rel="noreferrer"
                  className="home-social-icons"
                  style={iconStyles.instagram}
                >
                  <FaInstagram />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcRwRCKwLwTtVTnQdhqGcMvNWJQgGdTVWSzPLBgwLZMvRBPlmjCklCdJLWnLLqrHKBqbnPgSL"
                  target="_blank"
                  rel="noreferrer"
                  className="home-social-icons"
                  style={iconStyles.instagram}
                >
                  <FaMailBulk />
                </a>
              </li>
            </ul>
          </Col>
        </Row>

      </Container>
    </Container>
  );
}
export default Home2;
