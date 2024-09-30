// src/App.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Marketplace from './Components/Marketplace/Marketplace';
import Home from './pages/Home';

function App() {

  return (
    <Router>
      <Routes>
        <Route
          path="/marketplace"
          element={<Marketplace />}
        />
        <Route
          path="*"
          element={<Home/>}
        />
      </Routes>
    </Router>
  );
}

export default App;
