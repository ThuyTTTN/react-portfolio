import React, { useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ContactForm from "./components/Contact";

//style
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="content">
        <p>About Section</p>
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
