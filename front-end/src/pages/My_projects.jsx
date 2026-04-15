import logo_AE from "../assets/logo_AE.png"
import hbnb_logo from "../assets/hbnb_logo.png"

function My_projects() {
  return (
    <div>
    <br></br>
    <h2>Mes projets</h2>
    <br></br>
    <u><b> Voici les projets que j’ai réalisés ou sur lesquels je travaille actuellement</b></u>
    <br></br>
    <h3>Autistic Eye</h3>
    <p>(Août 2025 - en cours...)</p>
    <br></br>
    <img src={logo_AE} alt="Logo Autistic Eye"/>
    <br></br>
    <br></br>
    <p>Autistic Eye est un réseau social communautaire dédié aux personnes autistes et à leurs proches. Il a été créé pour lutter contre l’isolement en offrant un espace d’échange, d’entraide et de partage d’expériences. La plateforme permet d’accéder facilement à des informations utiles sur de nombreux sujets liés à l’autisme, afin d’améliorer le quotidien des utilisateurs.</p>
    <br></br>
    <h3>Hbnb</h3>
    <p>(Mai 2025 - Août 2025)</p>
    <br></br>
    <img src={hbnb_logo} alt="Logo Hbnb"/>
    <br></br>
    <br></br>
    <p>Hbnb est un projet académique de la Holberton School, réalisé en groupe avec <a href="https://github.com/EmmanuelMOUMBOUILOU">EmmanuelMOUMBOUILOU</a> et <a href="https://github.com/Dj-kvt">Dj-kvt</a> pour la partie back-end, puis en individuel pour la partie front-end. Le but de ce projet était de créer une version simplifiée du site Airbnb.</p>
    <br></br>
    <br></br>
    </div>
  );
}

export default My_projects;