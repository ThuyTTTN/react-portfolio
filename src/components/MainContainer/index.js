// import React, { useState } from "react";
import Header from "../Header";
import About from "../About";
import Footer from "../Footer";
import ContactForm from "../Contact";
import Project from "../Project";
import Resume from "../Resume";


function MainContainer({page, setPage}) {
  const currentPage = () => {
    
    if (page === "about") {
      return <About />;
    }
    if (page === "contact") {
      return <ContactForm />;
    }
    if (page === "portfolio") {
      return <Project />;
    }
    if (page === "resume") {
      return <Resume />;
    }
    
  };
  return (
   <>
   <Header setPage={setPage} />
      {currentPage()}
      <Footer />
   </>
  );
}

export default MainContainer;