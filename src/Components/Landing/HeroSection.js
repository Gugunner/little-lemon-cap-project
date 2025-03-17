import React from "react";
import { reserveTablePath } from "../../Constants/paths.js";
import Hero from "../Common/Hero/Hero.js";

export default function HeroSection() {
  return (
    <Hero
      sectionClass="landing-hero-section"
      title="Little Lemon"
      subtitle="Chicago"
      description={`We are a family owned mediterranean restaurant focused on traditional
      recipes served with a modern twist.`}
      actionText="Reserve a Table"
      actionUrl={reserveTablePath}
      imageUrl="/assets/images/restaurant_food.png"
      imageAltText="A waiter carrying different kind of bruschettas."
    />
  );
}
