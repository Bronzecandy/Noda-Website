// src/App.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import './App.css';
import Footer from './Components/Footer/Footer';
import Marketplace from './Components/Marketplace/Marketplace';
import { ExPro } from './Components/ExcitingPromotion/ExPro';
import Header from './Components/Header/Header';
import Introduce from './Components/Banner/Introduce';
import Banner from './Components/Banner/Banner';
import { Partnership } from './Components/Partnership/Partnership';
import MarketCapitalization from './Components/Market capitalization/MarketCapitalization';
import CoinStaking from './Components/CoinStaking/CoinStaking';
import JoinUs from './Components/JoinUs/JoinUs';
import AOS from 'aos';

function App() {
  useEffect(() => {
    AOS.refresh(); // Refresh AOS sau khi render
  }, []);
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
              <Header />
              <Banner />
              <Introduce />
              <MarketCapitalization />
              <ExPro />
              <Partnership />
              <CoinStaking />
              <JoinUs />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
