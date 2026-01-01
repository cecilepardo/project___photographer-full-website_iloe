import { Outlet, Link } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <div className="app-container">
      <nav className="navbar">
        <div className="container">
          <Link to="/">Accueil</Link>
          <Link to="/urbex">Urbex</Link>
          {/* language selector after */}
        </div>
      </nav>

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default App;