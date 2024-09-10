// src/App.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Footer from './Components/Footer/Footer';
import Marketplace from './Components/Marketplace/Marketplace';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route
          path="/marketplace"
          element={<Marketplace />}
        />
        <Route
          path="*"
          element={
            <>
              <p className="read-the-docs">
                Click on the Vite and React logos to learn more
              </p>
              
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
