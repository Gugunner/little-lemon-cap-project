import React from "react";
import { homePath } from "../../Constants/paths";
import HeroSection from "../Common/Hero/HeroSection";

export default function ReserveHeroSection() {
  return (
    <HeroSection
      sectionClass="reserve-hero-section"
      title="Little Lemon"
      subtitle="Chicago"
      description={`
        Located near the renovated Plaza center you can be delighted with original
      and renown mediteranean food.`}
      actionText="Order Online"
      actionUrl={homePath}
      imageUrl="/assets/images/restaurant_place.png"
      imageAltText="The inside of the restaurant with tables and booths."
    />
  );
}
