import "../../styles/landing.css";
import "../../styles/hero.css";
import "../../styles/fonts.css";

import HorizontalLayout from "../HorizontalLayout.js";

function RestaurantTitles() {
  return (
    <>
      <h1 className="display-title">Little Lemon</h1>
      <h2 className="sub-title">Chicago</h2>
    </>
  );
}

function RestaurantDescription() {
  return (
    <p className="lead-text">
      We are a family owned mediterranean restaurant focused on traditional
      recipes served with a modern twist.
    </p>
  );
}

function RestaurantAppealAction() {
  return (
    <>
      <RestaurantDescription />
      <button className="card-title">Reserve a table</button>
    </>
  );
}

function RestaurantImage() {
  return (
    <img
      src="/assets/images/restaurant_food.png"
      alt="A waiter carrying different kind of bruschettas"
    />
  );
}

function DesktopHeroSection() {
  return (
    <>
      <div className="flex-horizontal">
        <div className="flex-vertical">
          <RestaurantTitles />
          <RestaurantAppealAction />
        </div>
        <RestaurantImage />
      </div>
    </>
  );
}

function MobileHeroSection() {
  return (
    <>
      <RestaurantTitles />
      <div className="flex-horizontal">
        <div className="flex-vertical">
          <RestaurantAppealAction />
        </div>
        <RestaurantImage />
      </div>
    </>
  );
}

export default function HeroSection() {
  return (
    <section className="hero-section outline">
      <div className="ribbon">
        <div className="constrain-content no-xresize outline">
          <HorizontalLayout>
            <DesktopHeroSection />
            <MobileHeroSection />
          </HorizontalLayout>
        </div>
      </div>
    </section>
  );
}
