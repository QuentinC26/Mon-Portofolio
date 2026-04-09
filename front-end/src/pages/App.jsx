import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About_me from './pages/About_me';
import My_Projects from './pages/My_Projects';
import Contact from './pages/contact';
import './App.css'

function App() {
  return (
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
        <Route path="/mes_projets" element={<My_Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
