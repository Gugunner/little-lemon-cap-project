import "../../styles/landing.css";
import "../../styles/helpers.css";

import HeroSection from "./HeroSection";

export default function Main() {
  return (
    <main className="outline">
      <HeroSection />
      <section className="highlights outline">
        <h1>Highlights</h1>
      </section>
      <section className="testimonials outline">
        <h1>Testimonials</h1>
      </section>
      <section className="about outline">
        <h1>About</h1>
      </section>
    </main>
  );
}
