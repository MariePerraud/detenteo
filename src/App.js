import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Spa from "./pages/Spa";
import Massages from "./pages/Massages";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop>
          <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/spa" element={<Spa />} />
              <Route path="/massages" element={<Massages />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          <Footer />
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;
