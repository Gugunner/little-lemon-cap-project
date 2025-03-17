import React from "react";
import Footer from "./Footer";
import Header from "./Header";

import "../styles/helpers.css";
import "../styles/reserve-table.css";
import Main from "./ReserveTable/Main";

export default function ReserveTablePage() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}
