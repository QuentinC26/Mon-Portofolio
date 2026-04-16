import { useState } from "react";
import logo_AE from "../assets/logo_AE.png"
import hbnb_logo from "../assets/hbnb_logo.png"

function My_projects() {
  const [openCard, setOpenCard] = useState(null);

  return (
    <div>
    <br></br>
    <h2>Mes projets :</h2>
    <br></br>
    <div className="cards-grid">
    <div className="card ">
    <div className="card-img"><img src={logo_AE} alt="Logo Autistic Eye"/></div>
    <a className="card-title" href="https://github.com/QuentinC26/Autistic-Eye">Autistic Eye</a>
    <br></br>
    <br></br>
    <div className="card-date">(Août 2025 - en cours...)</div>
    <div className="card-content"> {openCard === "AE" ? (
    <>
    Réseau social dédié aux personnes autistes et à leurs proches, visant à lutter contre l’isolement en favorisant l’échange et le partage d’expériences. Accès à des ressources et informations pour améliorer le quotidien des utilisateurs.
    </>
    ) : (
    <>
    Réseau social dédié aux personnes autistes et à leurs proches...
    </>
    )}
    <br></br>
    <br></br>
    <button onClick={() => setOpenCard(openCard === "AE" ? null : "AE")}>{openCard === "AE" ? "Voir moins" : "Voir plus"}</button>
    </div>
    </div>
    <div className="card ">
    <div className="card-img"><img src={hbnb_logo} alt="Logo Hbnb"/></div>
    <a className="card-title" href="https://github.com/QuentinC26/holbertonschool-hbnb">Hbnb</a>
    <br></br>
    <br></br>
    <div className="card-date">(Mai 2025 - Août 2025)</div>
    <div className="card-content"> {openCard === "HBNB" ?  (
    <>
    Projet académique inspiré d’Airbnb, réalisé en groupe pour le back-end puis en autonomie pour le front-end. Développement d’une application web complète avec gestion des utilisateurs et des logements.
    </>
    ) : (
    <>
    Projet académique inspiré d’Airbnb, réalisé en groupe pour le back-end puis en autonomie pour le front-end.
    </>
    )}
    <br></br>
    <br></br>
    <button onClick={() => setOpenCard(openCard === "HBNB" ? null : "HBNB")}>{openCard === "HBNB" ? "Voir moins" : "Voir plus"}</button>
    </div>
    </div>
    </div>
    </div>
  );
}

export default My_projects;