import { useState } from "react";
import quentinzuzlewski from "../assets/quentinzuzlewski.png"
import holberton from "../assets/holberton.png"
import work from "../assets/work.png"
import html from "../assets/html.png"
import css from "../assets/css.png"
import react from "../assets/react.png"
import javascript from "../assets/javascript.png"
import typescript from "../assets/typescript.png"
import c from "../assets/c.png"
import python from "../assets/python.png"
import flask from "../assets/flask.png"
import django from "../assets/django.png"
import nodejs from "../assets/nodejs.png"
import mysql from "../assets/mysql.png"
import mongodb from "../assets/mongodb.png"
import git from "../assets/git.png"
import docker from "../assets/docker.png"
import methodeagile from "../assets/methodeagile.png"
import trello from "../assets/trello.png"
import objectif from "../assets/objectif.png"
import netlify from "../assets/netlify.png"
import render from "../assets/render.png"
import java from "../assets/java.png"
import springboot from "../assets/springboot.png"
import angular from "../assets/angular.png"

function About_me() {
  const [tab, setTab] = useState("who");
  
  return (
    <div>
      <h2>À propos de moi :</h2>

      <div className="tabs">
        <button onClick={() => setTab("who")}>Qui suis-je ?</button>
        <button onClick={() => setTab("path")}>Parcours</button>
        <button onClick={() => setTab("work")}>Méthode de travail</button>
        <button onClick={() => setTab("skills")}>Compétences</button>
        <button onClick={() => setTab("search")}>Objectif professionnel</button>
      </div>

      {tab === "who" && (
        <div>
          <h2>Qui suis-je ?</h2>
          <div className="tabs_onetabs">
          <img src={quentinzuzlewski} alt="Quentin Zuzlewski"/>
          <p>
          Issu du développement web full stack, j’aime concevoir et donner vie à des projets numériques, de l’idée initiale jusqu’à leur concrétisation. Curieux et polyvalent, j’apprécie les environnements où je peux apprendre, explorer de nouveaux domaines et contribuer à des projets variés mêlant créativité, réflexion et innovation.
          </p>
        </div>
        </div>
      )}

      {tab === "path" && (
        <div>
        <h2>Parcours :</h2>
        <div className="tabs_onetabs">
          <img src={holberton} alt="holberton"/>
          <p>
            À l’issue de ma formation de développeur web à Holberton School, j’ai réalisé plusieurs projets concrets
            afin de renforcer mes compétences techniques et personnelles. Aujourd’hui, je continue à développer mes
            compétences à travers de nouveaux projets et reste ouvert à toute opportunité.
          </p>
        </div>
        </div>
      )}

      {tab === "work" && (
        <div>
        <h2>Méthode de travail :</h2>
        <div className="tabs_onetabs">
          <img src={work} alt="work"/>
          <p>
            Avant de commencer un projet, je prends le temps de définir les objectifs, les besoins et les solutions adaptées. J’accorde une grande importance à la qualité, à la clarté et à la maintenabilité des réalisations. J’avance de manière progressive en structurant les différentes étapes du projet, tout en restant flexible face aux évolutions et aux imprévus. J’utilise une approche agile afin de suivre l’avancement, recueillir des retours et améliorer continuellement le résultat final.
          </p>
        </div>
        </div>
      )}

      {tab === "skills" && (
        <div>
        <h2>Compétences :</h2>
        <div className="tabs_skillstabs">
          <h3>Front-end :</h3>
          <img src={html} alt="html" title="HTML"/>
          <img src={css} alt="css" title="CSS"/>
          <img src={javascript} alt="javascript" title="Javascript"/>
          <img src={typescript} alt="typescript" title="Typescript"/>
          <img src={react} alt="react" title="React"/>
          <img src={angular} alt="angular" title="Angular"/>
          <h3>Back-end :</h3>
          <img src={c} alt="C" title="C"/>
          <img src={python} alt="python" title="Python"/>
          <img src={flask} alt="flask" title="Flask"/>
          <img src={django} alt="django" title="Django"/>
          <img src={nodejs} alt="nodejs" title="Node.js"/>
          <img src={java} alt="java" title="Java"/>
          <img src={springboot} alt="springboot" title="Springboot"/>
          <h3>Base de données :</h3>
          <img src={mysql} alt="mysql" title="MySql"/>
          <img src={mongodb} alt="mongodb" title="MongoDB"/>
          <h3>Outils & méthodologies :</h3>
          <img src={git} alt="git" title="Git"/>
          <img src={docker} alt="docker" title="Docker"/>
          <img src={methodeagile} alt="méthodeagile" title="Méthode Agile"/>
          <img src={trello} alt="mysql" title="Trello"/>
          <img src={netlify} alt="netlify" title="Netlify"/>
          <img src={render} alt="render" title="Render"/>
        </div>
        </div>
      )}

      {tab === "search" && (
        <div>
        <h2>Objectif professionnel :</h2>
        <div className="tabs_onetabs">
          <img src={objectif} alt="objectif"/>
          <p>
          Actuellement à la recherche d’une nouvelle opportunité, je souhaite continuer à apprendre, développer mes compétences et découvrir de nouveaux domaines dans le numérique. Curieux et adaptable, je suis ouvert à différents types de missions qui me permettront d’évoluer et de mettre à profit mon expérience.
          </p>
        </div>
          </div>
      )}
    </div>
  );
}

export default About_me;