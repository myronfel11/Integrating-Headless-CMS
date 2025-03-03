import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./assets/components/Layout.jsx";
import Events from "./assets/pages/Events";

import Navbar from "./assets/components/Navbar";
import Home from "./assets/pages/home";
import Company from "./assets/pages/company";
import Resources from "./assets/pages/Resources";

function App() {
  return (
    <Layout>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/company" element={<Company />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/events" element={<Events />} />
        </Routes>
      </Router>
    </Layout>
  );
}

export default App;
