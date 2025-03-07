import React from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Main from "./Components/Main/Main";

import "./styles/fonts.css";
import "./styles/helpers.css";
import "./styles/landing.css";

function App() {
  return (
    <>
      <Header />
      <Main />
      <hr />
      <Footer />
    </>
  );
}

export default App;
