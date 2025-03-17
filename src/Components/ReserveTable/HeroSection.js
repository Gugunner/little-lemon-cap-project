import React from "react";

import { Link } from "react-router";
import { homePath } from "../../Constants/paths";
import { md } from "../../Constants/sizes";
import useWindowDimensions from "../../Hooks/useWindowDimensions";
import "../../styles/fonts.css";
import "../../styles/helpers.css";
import "../../styles/reserve/hero.css";

function RestaurantTitles() {
  return (
    <div className="titles">
      <h1 className="display-title">Little Lemon</h1>
      <h2 className="sub-title">Chicago</h2>
    </div>
  );
}

function RestaurantLocalDescription() {
  return (
    <p className="lead-text">
      Located near the renovated Plaza center you can be delighted with original
      and renown mediteranean food.
    </p>
  );
}

function OrderOnlineButton() {
  return (
    <button className="card-title hero-button">
      <Link to={homePath}>Order Online</Link>
    </button>
  );
}

function RestauranAppealOrderAction() {
  return (
    <div className="order-appeal-action">
      <RestaurantLocalDescription />
      <OrderOnlineButton />
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
      src="/assets/images/restaurant_place.png"
      alt="The inside of the restaurant with tables and booths"
    />
  );
}

export default function HeroSection() {
  return (
    <div className="reserve-hero-section constrain-content">
      <div className="grid reserve-hero-grid">
        <RestaurantTitles />
        <RestauranAppealOrderAction />
        <RestaurantImage />
      </div>
    </div>
  );
}
