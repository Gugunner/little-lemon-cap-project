import HeroSection from "./HeroSection";
import HighlightsSection from "./HighlightsSection";
import TestimonialsSection from "./TestimonialsSection";
import AboutSection from "./AboutSection";

export default function Main() {
  return (
    <main className="outline">
      <HeroSection />
      <HighlightsSection />
      <TestimonialsSection />
      <AboutSection />
    </main>
  );
}
