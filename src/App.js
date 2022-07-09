import React, { useState } from "react";
import Banner from "./components/Banner";
import MainContainer from "./components/MainContainer";

//style
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {

  const [page, setPage] = useState("splash");

  return (
    <div className="App">
      {page === 'splash' ? <Banner setPage={setPage} />: 
      <MainContainer page={page} setPage={setPage}/>
      }
    </div>
  );
}

export default App;
