import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Footer from "./components/Footer";
import ContactForm from "./components/Contact";
import Project from "./components/Project";

//style
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Project />
      
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
