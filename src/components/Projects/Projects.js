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
              description="Dans ce projet, j’ai développé la page d’accueil responsive d’une agence de voyage à partir de maquettes Figma pour mobile, tablette et desktop. L’intégration a été réalisée manuellement en HTML et CSS, sans framework, afin de garantir une compréhension fine du design responsive.
Ce projet m’a permis de renforcer mes compétences en intégration web, en responsive design, en utilisation de Git, ainsi qu’en mise en place d’un environnement de développement front-end structuré et organisé.
Compétences clés : HTML, CSS, Responsive Design, Git, Intégration à partir de maquettes Figma
#HTML #CSS #Git #ResponsiveDesign"
              ghLink="https://github.com/IsmailDerkaoui/booki"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Sophie Bluel"
              description="Dans ce projet, j’ai développé une interface dynamique en JavaScript pour présenter les réalisations d’une architecte d’intérieur. Le projet comprenait la manipulation du DOM, la communication avec une API back-end, la création d’une page de connexion sécurisée, ainsi qu’une modale d’upload de médias.
Ce projet m’a permis de consolider mes compétences en JavaScript, en gestion des événements, et en intégration d’API. La prise en main de l’API, la gestion des médias et le développement d’une modale entièrement fonctionnelle ont été des étapes techniques clés, qui m’ont permis d’évoluer vers un profil de développeur Front-End plus complet et autonome.
Compétences clés : JavaScript, API REST, DOM, Modale, Authentification, Upload médias, HTML, CSS
#HTML #CSS #JavaScript #API #FrontEnd"
              ghLink="https://github.com/IsmailDerkaoui/site-Sophie-Bluel"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Nina Carducci"
              description="Dans ce projet, j’ai analysé un site web à l’aide d’outils tels que Lighthouse et Wave pour identifier les axes d’amélioration en termes de référencement, de performance et d’accessibilité. J’ai ensuite appliqué des optimisations ciblées sur le code et mesuré les résultats à travers un rapport comparatif avant/après.
Cette expérience m’a permis de renforcer mes compétences en SEO technique, en amélioration de l’expérience utilisateur, et en débogage orienté performance. L’analyse et l’implémentation des recommandations issues des outils d’audit m’ont permis de mieux comprendre leur fonctionnement et d’adopter une approche plus rigoureuse pour optimiser un site de manière concrète et mesurable.
Compétences clés : SEO technique, Audit Lighthouse, Accessibilité Web, Optimisation de performance, Expérience utilisateur
#SEO #Performance #Accessibilité #WebDevelopment"
              ghLink="https://github.com/IsmailDerkaoui/Nina-Carducci-Dev-master"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Kasa"
              description="Dans ce projet, j’ai développé l’interface utilisateur d’une application en utilisant React et React Router, en respectant les maquettes fournies pour créer une interface moderne et responsive. L’application s’appuie sur des données simulées à partir d’un fichier JSON, ce qui m’a permis de structurer l’affichage à l’aide de composants dynamiques et réutilisables.
Ce projet m’a permis de renforcer mes compétences en développement d’interfaces React, en gestion de la navigation, ainsi qu’en stylisation avancée avec Sass et des animations CSS. La gestion fine de l’état des composants et l’organisation de la navigation m’ont apporté une meilleure maîtrise du cycle de vie et des outils de routage dans un contexte React.
Compétences clés : React, React Router, Sass, CSS Animations, Composants dynamiques, Navigation SPA
#React #ReactRouter #Sass #CSSAnimations"
              ghLink="https://github.com/IsmailDerkaoui/projet-react"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Mon vieux Grimoire"
              description="Dans ce projet, j’ai conçu une API RESTful avec Node.js, Express et MongoDB, en suivant l’architecture MVC et les bonnes pratiques de sécurité. J’ai implémenté les opérations CRUD, un système d’authentification sécurisé, la gestion des images via Multer, et le calcul des notes moyennes.
Ce projet m’a permis de consolider mes compétences en développement back-end, en gestion de données, ainsi qu’en sécurisation des routes grâce à JWT et bcrypt. La configuration fine des middlewares et la gestion sécurisée des fichiers ont été des points clés qui m’ont permis de progresser sur des aspects techniques avancés.
Compétences clés : Node.js, Express, MongoDB, API REST, Authentification, Sécurité, Middleware, MVC
#NodeJS #Express #MongoDB #Sécurité #APIRestful"
              ghLink="https://github.com/IsmailDerkaoui/D-veloppez-le-back-end-d-un-site-de-notation-de-livres"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Qwenta"
              description="Dans le cadre de ce projet, j’ai piloté la planification du développement d’un site web en traduisant les besoins fonctionnels et les User Stories en spécifications techniques, sans intervenir sur la partie code. J’ai structuré l’organisation du projet à l’aide d’un tableau Kanban sur Notion, mené une veille technologique, et présenté une solution technique claire et argumentée.
Ce projet m’a permis de renforcer mes compétences en gestion de projet, en analyse fonctionnelle, ainsi qu’en communication technique. La compréhension fine des besoins et la rédaction des spécifications ont été des leviers importants pour approfondir mes connaissances sur la phase de conception d’un produit digital.
Compétences clés : Gestion de projet, Analyse fonctionnelle, Rédaction technique, Organisation agile, Veille technologique
#GestionDeProjet #AnalyseFonctionnelle #CommunicationTechnique"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
