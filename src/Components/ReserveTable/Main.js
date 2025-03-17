import React from "react";

import HeroSection from "./ReserveHeroSection";

export default function Main() {
  return (
    <main>
      <HeroSection />
      <div className="custom-select-section outline">
        <h1>Custom Select Section</h1>
      </div>
      <div className="time-window-section outline">
        <h1>Time Window Section</h1>
      </div>
    </main>
  );
}
