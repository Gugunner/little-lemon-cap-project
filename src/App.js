import React from "react";
import { Route, Routes } from "react-router";
import LandingPage from "./Components/LandingPage";
import ReservationSection from "./Components/ReserveTable/ReservationSection";
import ReserveTablePage from "./Components/ReserveTablePage";

import {
  confirmReservePath,
  homePath,
  reserveTablePath,
} from "./Constants/paths";

import ConfirmReserveSection from "./Components/ReserveTable/ConfirmReserveSection";
import "./styles/fonts.css";
import "./styles/helpers.css";
import "./styles/landing.css";

function App() {
  return (
    <Routes>
      <Route path={homePath} element={<LandingPage />} />
      <Route path={reserveTablePath} element={<ReserveTablePage />}>
        <Route index element={<ReservationSection />} />
        <Route path={confirmReservePath} element={<ConfirmReserveSection />} />
      </Route>
    </Routes>
  );
}

export default App;
