import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import Home from './Home';
import About_me from './About_me';
import My_projects from './My_projects';
import Contact from './Contact';
import './App.css'
import github from "../assets/github.png"
import linkedin from "../assets/linkedin.png"

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
    <Router>
      <nav>
       <button 
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        <ul className={menuOpen ? "menu active" : "menu"}>
          <li>
            <button>
            <Link onClick={() => setMenuOpen(false)} to="/" className='a_nav'>
              Accueil
            </Link>
            </button>
          </li>

          <li>
            <button>
            <Link onClick={() => setMenuOpen(false)} to="/a_propos" className='a_nav'>
              À propos
            </Link>
            </button>
          </li>

          <li>
            <button>
            <Link onClick={() => setMenuOpen(false)} to="/mes_projets" className='a_nav'>
              Mes projets
            </Link>
            </button>
          </li>

          <li>
            <button>
            <Link onClick={() => setMenuOpen(false)} to="/contact" className='a_nav'>
              Contact
            </Link>
            </button>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/a_propos" element={<About_me />} />
        <Route path="/mes_projets" element={<My_projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
      <footer>
      <a href="https://github.com/QuentinC26"> <img src={github} alt="Mon Github"/></a>
      <a href="https://www.linkedin.com/in/quentinzuzlewski/"> <img src={linkedin} alt="Mon Linkedin"/></a>
      <p className="copyright">©2026 Quentin Zuzlewski. Tous droits réservés.</p>
    </footer>
    </>
  );
}

export default App;
