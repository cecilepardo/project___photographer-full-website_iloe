import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import About from './pages/About';
import Boutique from './pages/Boutique';
import Portrait from './pages/Portrait';
import Series from './pages/Series';
import Sport from './pages/Sport';
import Urbex from './pages/Urbex';
import Voyage from './pages/Voyage';
import Navbar from './components/Navbar/Navbar';

// Define component with function
const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="boutique" element={<Boutique />} />
          <Route path="portrait" element={<Portrait />} />
          <Route path="series" element={<Series />} />
          <Route path="sport" element={<Sport />} />
          <Route path="urbex" element={<Urbex />} />
          <Route path="voyage" element={<Voyage />} />
        </Route>
      </Routes>
    </Router>
  );
};

// Export component
export default AppRouter;