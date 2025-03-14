import React from "react";
import { Route, Routes } from "react-router";
import LandingPage from "./Components/LandingPage";
import ReserveTablePage from "./Components/ReserveTablePage";

import { homePath, reserveTablePath } from "./Constants/paths";

import "./styles/fonts.css";
import "./styles/helpers.css";
import "./styles/landing.css";

function App() {
  return (
    <Routes>
      <Route path={homePath} element={<LandingPage />} />
      <Route path={reserveTablePath} element={<ReserveTablePage />} />
    </Routes>
  );
}

export default App;
