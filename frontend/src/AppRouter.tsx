import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import Urbex from './pages/Urbex';

// Define component with function
const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="Urbex" element={<Urbex />} />
        </Route>
      </Routes>
    </Router>
  );
};

// Export component
export default AppRouter;