import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import { projects } from "./MYProjects";
import Description from "./Description";
// import ProjectModal from "./ProjectModal";
function Projects() {
    const [show, setShow] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const handleShow = (project) => {
        setSelectedProject(project);
        setShow(true);
    };

    const handleClose = () => {
        setShow(false);
        setSelectedProject(null);
    };

    return (
        <Container fluid className="project-section">
            <Container>
                <h1 className="project-heading">
                    My Recent <strong className="purple">Works </strong>
                </h1>
                <p style={{ color: "white" }}>
                    Here are a few projects I've worked on recently.
                </p>
                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                    {projects.map((project, index) => (
                        <Col
                            md={4}
                            className="project-card"
                            key={index}
                            onClick={() => handleShow(project)}
                        >
                            <ProjectCard
                                imgPath={project.imgPath}
                                isBlog={false}
                                title={project.title}
                                description={project.description}
                                ghLink={project.ghLink}
                                demoLink={project.demoLink}
                            />
                        </Col>
                    ))}
                </Row>
            </Container>
            {selectedProject && (
                <Description
                    show={show}
                    handleClose={handleClose}
                    project={selectedProject}
                />
            )}
        </Container>
    );
}

export default Projects;
