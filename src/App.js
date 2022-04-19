import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

// Components
import Nav from "./components/Nav";

// Pages
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";


function App() {
  return (
    <Router>
      <div>
        <Nav />
        
        <Routes>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
