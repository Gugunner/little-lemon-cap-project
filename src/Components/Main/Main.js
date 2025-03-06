import HeroSection from "./HeroSection";
import HighlightsSection from "./HighlightsSection";
import TestimonialsSection from "./TestimonialsSection";

export default function Main() {
  return (
    <main className="outline">
      <HeroSection />
      <HighlightsSection />
      <TestimonialsSection />
      {/* <section className="about outline">
        <h1>About</h1>
      </section> */}
    </main>
  );
}
