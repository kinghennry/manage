import React from "react"
import "./App.css"
import Nav from "./components/Nav"
import Hero from "./components/Hero"
import Article from "./components/Article";
import NewsLetter from "./components/NewsLetter";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
function App() {
  return (
      <div className="app">  
          <Nav/>
          <Hero/>
          <Article/>
          <Testimonials/>
      <NewsLetter />
      <Footer/>
        </div>
  );
}

export default App;