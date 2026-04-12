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
          <li><button><Link to="/" class='a_nav'>Accueil</Link></button></li>
          <li><button><Link to="/à_propos" class='a_nav'>À propos</Link></button></li>
          <li><button><Link to="/mes_projets" class='a_nav'>Mes projets</Link></button></li>
          <li><button><Link to="/contact" class='a_nav'>Contact</Link></button></li>
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
