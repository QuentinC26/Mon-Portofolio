import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About_me from './About_me';
import My_projects from './My_projects';
import Contact from './Contact';
import './App.css'
import github from "../assets/github.png"
import linkedin from "../assets/linkedin.png"

function App() {
  return (
    <>
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/à_propos">À propos</Link></li>
          <li><Link to="/mes_projets">Mes projets</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/à_propos" element={<About_me />} />
        <Route path="/mes_projets" element={<My_projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
      <footer>
      <a href="https://github.com/QuentinC26"> <img src={github} alt="Mon Github"/></a>
      <a href="https://www.linkedin.com/in/quentinzuzlewski/"> <img src={linkedin} alt="Mon Linkedin"/></a>
      <p class="copyright">©2026 Quentin Zuzlewski. Tous droits réservés.</p>
    </footer>
    </>
  );
}

export default App;
