import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Inicio from './pages/Inicio';
import Produtos from './pages/Produtos';
import Carrinho from './pages/Carrinho';

function App() {

  return (
    <Router>
      <header>
        <nav>
          <Link to="/" className="base-logo">horta<strong>E</strong>frutas</Link>
          <ul className="base-nav-list">
            <li><Link to="/">Início</Link></li>
            <li><Link to="/produtos">Produtos</Link></li>
            <li><Link to="/carrinho">Carrinho</Link></li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Inicio/>}/>
        <Route path="/produtos" element={<Produtos/>}/>
        <Route path="/carrinho" element={<Carrinho/>}/>
      </Routes>
    </Router>
  );
}

export default App;
