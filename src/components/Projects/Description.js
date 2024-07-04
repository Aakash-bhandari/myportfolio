import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const Description = ({ show, handleClose, project }) => {
    return (
        <Modal show={show} onHide={handleClose} size="lg">
            <Modal.Header closeButton>
                <Modal.Title>{project.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {/* Images Section */}
                <section>
                    <h5>Images</h5>
                    <div className="row">
                        {/* First two images in a row */}
                        <div className="col-sm-6 col-md-6 mb-3">
                            <img src={project.screenShots[0]} alt={project.title} className="img-fluid rounded-lg mb-3" style={{ maxHeight: '200px' }} />
                        </div>
                        <div className="col-sm-6 col-md-6 mb-3">
                            <img src={project.screenShots[1]} alt={project.title} className="img-fluid rounded-lg mb-3" style={{ maxHeight: '200px' }} />
                        </div>

                        {/* Next two images in a row */}
                        <div className="col-sm-6 col-md-6 mb-3">
                            <img src={project.screenShots[2]} alt={project.title} className="img-fluid rounded-lg mb-3" style={{ maxHeight: '200px' }} />
                        </div>
                        <div className="col-sm-6 col-md-6 mb-3">
                            <img src={project.screenShots[3]} alt={project.title} className="img-fluid rounded-lg mb-3" style={{ maxHeight: '200px' }} />
                        </div>
                    </div>
                </section>

                {/* Description Section */}
                <section>
                    <h5>Description</h5>
                    <p>{project.detailDescription}</p>
                </section>

                {/* Technologies Used Section */}
                <section>
                    <h5>Technologies Used</h5>
                    <ul>
                        {project.technologies?.map((tech, index) => (
                            <li key={index}>{tech}</li>
                        ))}
                    </ul>
                </section>

                <div className="my-3">
                    {project.demoLink && (
                        <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary mx-3">
                            View Demo
                        </a>
                    )}
                    {project.ghLink && (
                        <a href={project.ghLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary mr-3">
                            GitHub
                        </a>
                    )}
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default Description;
