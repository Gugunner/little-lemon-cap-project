import React from "react";
import AboutSection from "./AboutSection";
import HighlightsSection from "./HighlightsSection";
import LandingHeroSection from "./LandingHeroSection";
import TestimonialsSection from "./TestimonialsSection";

export default function Main() {
  return (
    <main>
      <LandingHeroSection />
      <HighlightsSection />
      <TestimonialsSection />
      <AboutSection />
    </main>
  );
}
