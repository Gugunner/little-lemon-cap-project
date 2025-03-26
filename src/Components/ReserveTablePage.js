import React from "react";
import Footer from "./Footer";
import Header from "./Header";

import { Outlet } from "react-router";
import "../styles/helpers.css";
import "../styles/reserve-table.css";
import ReserveHeroSection from "./ReserveTable/ReserveHeroSection";

export default function ReserveTablePage() {
  return (
    <>
      <Header />
      <main>
        <ReserveHeroSection />
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
