import React from "react";
import "../../../styles/hero.css";
import {
  HeroButton,
  HeroDescription,
  HeroImage,
  HeroTitles,
} from "./CommonHero";

export default function Hero({
  sectionClass = "",
  title,
  subtitle,
  description,
  actionText,
  actionUrl,
  imageUrl,
  imageAltText,
}) {
  return (
    <section className={`${sectionClass} hero-section constrain-content`}>
      <div className="grid hero-grid">
        <HeroTitles title={title} subtitle={subtitle} />
        <div className="appeal-action">
          <HeroDescription description={description} />
          <HeroButton text={actionText} url={actionUrl} />
        </div>
        <HeroImage imageUrl={imageUrl} altText={imageAltText} />
      </div>
    </section>
  );
}
