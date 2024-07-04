import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Aakash Bhandari </span>
            from <span className="purple"> Mumbai, India.</span>
            <br />
            I graduated from Vidyavardhini's College of Engineering and Technology with a specialization in IT, along with honors in Artificial Intelligence in 2024.
            <br />
            I am skilled in web development and have worked with technologies such as <span className="purple">JavaScript, React.js, Express.js, Node.js, HTML, and CSS</span>. Additionally, I have experience with databases like <span className="purple">MongoDB</span> and <span className="purple">SQL</span>.
            <br />
            <br></br>
            I have successfully implemented three projects from scratch to deployment using these technologies. In 2023, I achieved 2nd position for presenting one of my projects at the Oscillations event. Apart from web development, I also have a strong understanding of Java and object-oriented programming.
            <br />
            Moreover, I am knowledgeable in <span className="purple">Docker, cloud technologies</span>, and version control using <span className="purple">Git/GitHub</span>.

          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
