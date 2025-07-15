import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/kasa.png";
import emotion from "../../Assets/Projects/qwenta.png";
import editor from "../../Assets/Projects/nina-carducci.png";
import chatify from "../../Assets/Projects/booki.png";
import suicide from "../../Assets/Projects/mon-vieux-grimoire.png";
import bitsOfCode from "../../Assets/Projects/sophie-bluel.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mes <strong className="purple">Projets </strong>
        </h1>
        <p style={{ color: "white" }}>
          Voici des projets sur lesquels j'ai travailler.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Booki"
              description="Dans ce projet, j'ai créé la page d'accueil responsive d'une agence de voyage en codant moi-même en HTML et CSS à partir de maquettes Figma pour mobile, tablette et desktop. Cela m'a permis de renforcer mes compétences en intégration web, en design responsive, en utilisation de Git, et en mise en place d’un environnement de développement front-end."
              ghLink="https://github.com/IsmailDerkaoui/booki"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Sophie Bluel"
              description="Dans ce projet, j'ai développé une page web dynamique pour une architecte d’intérieur en utilisant JavaScript, en manipulant le DOM et en communiquant avec une API à partir d’un code back-end. J'ai également créé une page de connexion, une modale d’upload de médias, et renforcé mes compétences en JavaScript, en gestion des événements et en intégration d’API, ce qui m’a permis d’évoluer vers un profil de développeur Front-End complet."
              ghLink="https://github.com/IsmailDerkaoui/site-Sophie-Bluel"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Nina Carducci"
              description="Dans ce projet, j'ai travaillé pour optimiser le référencement, la performance et l’accessibilité d’un site web en identifiant les problèmes via des outils comme Lighthouse et Wave, puis en appliquant des modifications ciblées sur le code. J’ai également rédigé un rapport comparatif avant/après, ce qui m’a permis de renforcer mes compétences en SEO technique, en débogage et en amélioration de l’expérience utilisateur."
              ghLink="https://github.com/IsmailDerkaoui/Nina-Carducci-Dev-master"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Kasa"
              description="Dans ce projet, j'ai implémenté le front-end d’une application en utilisant React et React Router pour créer une interface moderne, réactive et conforme aux maquettes fournies, en m'appuyant sur des données simulées issues d’un fichier JSON. Cela m’a permis de renforcer mes compétences en développement d’interfaces avec des composants React, en gestion de navigation, ainsi qu’en stylisation avancée avec Sass et animations CSS."
              ghLink="https://github.com/IsmailDerkaoui/projet-react"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Mon vieux Grimoire"
              description="Dans ce projet, j'ai développé le back-end d’un site de notation de livres en créant un serveur avec Express, connecté à une base de données MongoDB, tout en respectant l’architecture MVC et les bonnes pratiques de sécurité. J’y ai implémenté des opérations CRUD, un système d’authentification sécurisé, la gestion des images, ainsi que le calcul des notes moyennes, renforçant ainsi mes compétences en développement d’API RESTful et en gestion de données."
              ghLink="https://github.com/IsmailDerkaoui/D-veloppez-le-back-end-d-un-site-de-notation-de-livres"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Qwenta"
              description="Dans ce projet, j’ai planifié le développement d’un site web en rédigeant les spécifications techniques à partir des besoins fonctionnels et des User Stories, sans intervenir dans le code. J’ai mené une veille technologique, organisé le projet avec un tableau Kanban sur Notion, et présenté une solution technique structurée, ce qui m’a permis de renforcer mes compétences en gestion de projet, en analyse fonctionnelle et en communication technique."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
