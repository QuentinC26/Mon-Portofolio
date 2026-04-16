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

function About_me() {
  const [tab, setTab] = useState("who");
  
  return (
    <div>
      <br />
      <h2>À propos de moi :</h2>
      <br />

      <div className="tabs">
        <button onClick={() => setTab("who")}>Qui suis-je ?</button>
        <button onClick={() => setTab("path")}>Parcours</button>
        <button onClick={() => setTab("work")}>Méthode de travail</button>
        <button onClick={() => setTab("skills")}>Compétences</button>
        <button onClick={() => setTab("search")}>Objectif professionnel</button>
      </div>

      <br />

      {tab === "who" && (
        <div>
          <h2>Qui suis-je ?</h2>
          <br />
          <div className="tabs_onetabs">
          <img src={quentinzuzlewski} alt="Quentin Zuzlewski"/>
          <p>
            Je suis développeur web full stack, avec une préférence pour le front-end et une forte sensibilité créative.
            J’aime travailler sur des projets variés, qu’ils soient similaires ou complètement à l’opposé les uns des autres.
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
            Avant de commencer un projet, je définis les objectifs et les outils adaptés. 
            J’accorde une grande importance à la lisibilité du code et à sa structure. 
            J’organise mes projets avec une séparation claire entre front-end, back-end et base de données via Docker. 
            Je travaille de manière progressive, généralement du back-end vers le front-end. 
            Enfin, j’utilise une approche agile pour suivre l’avancement du projet et m’adapter aux imprévus.
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
          <h3>Back-end :</h3>
          <img src={c} alt="C" title="C"/>
          <img src={python} alt="python" title="Python"/>
          <img src={flask} alt="flask" title="Flask"/>
          <img src={django} alt="django" title="Django"/>
          <img src={nodejs} alt="nodejs" title="Node.js"/>
          <h3>Base de données :</h3>
          <img src={mysql} alt="mysql" title="MySql"/>
          <img src={mongodb} alt="mongodb" title="MongoDB"/>
          <h3>Outils & méthodologies :</h3>
          <img src={git} alt="git" title="Git"/>
          <img src={docker} alt="docker" title="Docker"/>
          <img src={methodeagile} alt="méthodeagile" title="Méthode Agile"/>
          <img src={trello} alt="mysql" title="Trello"/>
          <img src={netlify} alt="netlify" title="Netlify"/>
        </div>
        </div>
      )}

      {tab === "search" && (
        <div>
        <h2>Objectif professionnel :</h2>
        <div className="tabs_onetabs">
          <img src={objectif} alt="objectif"/>
          <p>
          Je suis actuellement à la recherche d’une alternance, avec la possibilité de réaliser un stage en amont, afin de continuer à développer mes compétences techniques et mes soft skills.
          Je reste ouvert à des opportunités en back-end, en front-end ou en full stack.
          </p>
        </div>
          </div>
      )}
      <br />
    </div>
  );
}

export default About_me;