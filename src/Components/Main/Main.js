import "../../styles/landing.css";
import "../../styles/helpers.css";

import HeroSection from "./HeroSection";
import HighlightsSection from "./HighlightsSection";

export default function Main() {
  return (
    <main className="outline">
      <HeroSection />
      <HighlightsSection />
      <section className="testimonials no-xresize outline">
        <h1>Testimonials</h1>
      </section>
      <section className="about no-xresize outline">
        <h1>About</h1>
      </section>
    </main>
  );
}
