import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Bonjour à tous, je suis<span className="purple"> Ismail Derkaoui </span>
            de <span className="purple"> Moselle, France.</span>
            <br />
            J'ai obtenu une formation de développeur web grâce à Openclassrooms, où j'ai appris à créer des applications web de A à Z.
            <br />
            <br />
            Outre le développement, voici les activités qui m'intéressent le plus :
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Jeux vidéo
            </li>
            <li className="about-activity">
              <ImPointRight /> Football
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>
          <p style={{ color: "rgb(155 126 172)" }}>
            "La vie est un défi, relève-le !"{" "}
          </p>
          
          <footer className="blockquote-footer">Ismail </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
