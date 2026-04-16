import { useState } from "react";
import quentinzuzlewski from "../assets/quentinzuzlewski.png"
import holberton from "../assets/holberton.png"
import work from "../assets/work.png"

function About_me() {
  const [tab, setTab] = useState("who");
  
  return (
    <div>
      <br />
      <h2>À propos de moi :</h2>
      <br />

      <div className="tabs">
        <button onClick={() => setTab("who")}>Qui suis-je ?</button>
        <button onClick={() => setTab("path")}>Mon parcours</button>
        <button onClick={() => setTab("work")}>Comment je travaille</button>
        <button onClick={() => setTab("skills")}>Ce que je sais faire</button>
        <button onClick={() => setTab("search")}>Ce que je recherche</button>
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
        <h2>Mon parcours :</h2>
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
        <h2>Comment je travaille ? :</h2>
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
        <h2>Ce que je sais faire :</h2>
        <div className="tabs_onetabs">
          <p>
            Lors de ma formation à Holberton School, j’ai travaillé avec plusieurs langages et technologies comme Python,
            JavaScript, HTML, CSS et MySQL. Mes projets m’ont ensuite permis de découvrir Django, React, Flask et Docker,
            avec un intérêt particulier pour Django et son organisation claire côté back-end.
          </p>
        </div>
        </div>
      )}

      {tab === "search" && (
        <div>
        <h2>Ce que je recherche :</h2>
        <div className="tabs_onetabs">
          <p>
            Je suis actuellement à la recherche d’un stage afin de continuer à développer mes compétences techniques et mes soft skills.
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