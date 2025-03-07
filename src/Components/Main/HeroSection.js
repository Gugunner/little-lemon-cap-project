import React from "react";
import "../../styles/hero.css";

import { HorizontalLayout } from "../HorizontalLayout.js";

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
    <p className="lead-text hero-story">
      We are a family owned mediterranean restaurant focused on traditional
      recipes served with a modern twist.
    </p>
  );
}

function RestaurantAppealAction() {
  return (
    <>
      <RestaurantDescription />
      <button className="card-title hero-button">Reserve a table</button>
    </>
  );
}

function RestaurantImage() {
  return (
    <img
      className="hero-img"
      src="/assets/images/restaurant_food.png"
      alt="A waiter carrying different kind of bruschettas"
    />
  );
}

function DesktopHeroSection() {
  return (
    <div className="outline">
      <div className="flex-row">
        <div className="start-items self-start">
          <RestaurantTitles />
          <RestaurantAppealAction />
        </div>
        <RestaurantImage />
      </div>
    </div>
  );
}

function MobileHeroSection() {
  return (
    <div className="outline">
      <RestaurantTitles />
      <div className="flex-row start-items">
        <div className="flex-column justify-between">
          <RestaurantAppealAction />
        </div>
        <RestaurantImage />
      </div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="hero-section outline">
      <div className="hero-content constrain-content">
        <HorizontalLayout>
          <DesktopHeroSection />
          <MobileHeroSection />
        </HorizontalLayout>
      </div>
    </section>
  );
}
