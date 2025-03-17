import React from "react";

import { Link } from "react-router";
import { reserveTablePath } from "../../Constants/paths.js";
import { md } from "../../Constants/sizes.js";
import useWindowDimensions from "../../Hooks/useWindowDimensions.js";
import "../../styles/landing/hero.css";

function RestaurantTitles() {
  return (
    <div className="titles">
      <h1 className="display-title">Little Lemon</h1>
      <h2 className="sub-title">Chicago</h2>
    </div>
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

function ReserveTableButton() {
  return (
    <button className="card-title hero-button">
      <Link to={reserveTablePath}>Reserve a Table</Link>
    </button>
  );
}

function RestaurantAppealReserveAction() {
  return (
    <div className="reserve-appeal-action">
      <RestaurantDescription />
      <ReserveTableButton />
    </div>
  );
}

function RestaurantImage() {
  const dimensions = useWindowDimensions();
  return (
    <img
      className={`restaurant-image justify-self-end ${
        dimensions.width >= md && "self-center"
      }`}
      src="/assets/images/restaurant_food.png"
      alt="A waiter carrying different kind of bruschettas"
    />
  );
}

export default function HeroSection() {
  return (
    <section className="hero-section constrain-content">
      <div className="grid hero-grid">
        <RestaurantTitles />
        <RestaurantAppealReserveAction />
        <RestaurantImage />
      </div>
    </section>
  );
}
