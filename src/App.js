import React from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import About from "./components/About";
import Footer from "./components/Footer";
import ContactForm from "./components/Contact";
import Project from "./components/Project";
import Resume from "./components/Resume";

//style
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <About />
      <Project />
      <Resume />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
