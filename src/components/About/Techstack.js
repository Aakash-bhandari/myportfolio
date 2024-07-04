import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiJava,
  DiMysql,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus color="#00599C" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 color="#F0DB4F" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs color="#68A063" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact color="#61DBFB" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb color="#4DB33D" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMysql color="#00758F" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit color="#F1502F" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava color="#5382a1" />
      </Col>
    </Row>
  );
}

export default Techstack;
