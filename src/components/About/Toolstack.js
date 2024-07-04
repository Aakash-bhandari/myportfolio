import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiDocker
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode color="#007ACC" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman color="#FF6C37" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker color="#2496ED" />
      </Col>
    </Row>
  );
}

export default Toolstack;
