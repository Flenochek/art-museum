import React from "react";
import Header from "./components/Header/Header";
import MuseumNews from "./components/MuseumNews/MuseumNews";
import LandingSection from "./components/LandingSection/LandingSection";
import AboutSection from "./components/AboutSection/AboutSection";



import "./App.css";

const App = () => {
  return (
    <div className="app">    
      <Header /> 
      <LandingSection/> 
      <MuseumNews />
      <AboutSection/>
      
    </div>
  );
};

export default App;