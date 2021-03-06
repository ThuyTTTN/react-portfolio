// import React, { useState } from "react";
import Header from "../Header";
import Banner from "../Banner";
import About from "../About";
import Footer from "../Footer";
import ContactForm from "../Contact";
import Project from "../Project";
import Resume from "../Resume";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function MainContainer() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={About} />
        <Route exact path="/about" component={About} />
        <Route exact path="/portfolio" component={Project} />
        <Route exact path="/resume" component={Resume} />
        <Route exact path="/contact" component={ContactForm} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default MainContainer;

// const currentPage = () => {

//   if (page === "about") {
//     return <About />;
//   }
//   if (page === "contact") {
//     return <ContactForm />;
//   }
//   if (page === "portfolio") {
//     return <Project />;
//   }
//   if (page === "resume") {
//     return <Resume />;
//   }

// };
// return (
//  <>
//  <Header setPage={setPage} />
//     {currentPage()}
//     <Footer />
//  </>
// );
