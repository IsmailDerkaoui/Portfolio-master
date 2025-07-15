import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LAISSEZ <span className="purple"> MOI ME </span> PRESENTER
            </h1>
            <p className="home-about-body">
              La programmation m’a rapidement captivé, et j’ai pris plaisir à apprendre et expérimenter chaque jour un peu plus.
              <br />
              <br />
              Je m’intéresse particulièrement à l’innovation web, &nbsp;
              <i>
                <b className="purple">au développement de produits tech </b> et également aux {" "}
                <b className="purple">
                  nouvelles technologies.
                </b>
              </i>
              <br />
              <br />
              Dès que possible, j’utilise des outils comme 
             <b className="purple"> React, Node.js</b>,
              <i>
                <b className="purple">
                  {" "}
                  MongoDB ou Express.js 
                </b>
              </i>
              &nbsp; pour donner vie à mes idées.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>RETROUVEZ MOI</h1>
            <p>
              N'hésitez pas à me <span className="purple">contacter </span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/IsmailDerkaoui"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ismail-derkaoui/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
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
