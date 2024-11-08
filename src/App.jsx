import React from "react";
import Header from "./components/Hero/Header/Header";
import Hero from "./components/Hero/Hero";
import Companies from "./components/Companies/Companies";
import Residencies from "./components/Residencies/Residencies";
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Hero Section with Gradient */}
      <div>
        <div className="white-gradient" />
        <Header />
        <Hero />
      </div>

      {/* Other Sections */}
      <Companies />
      <Residencies />
    </div>
  );
}

export default App;
