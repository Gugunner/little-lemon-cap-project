import React from "react";
import { Link } from "react-router";
import { md } from "../../../Constants/sizes";
import useWindowDimensions from "../../../Hooks/useWindowDimensions";

function HeroTitles({ title, subtitle }) {
  return (
    <div className="titles">
      <h1 className="display-title">{title}</h1>
      <h2 className="sub-title">{subtitle}</h2>
    </div>
  );
}

function HeroDescription({ description }) {
  return <p className="lead-text">{description}</p>;
}

function HeroButton({ text, url }) {
  return (
    <Link className="card-title hero-button" to={url}>
      {text}
    </Link>
  );
}

function HeroImage({ imageUrl, altText }) {
  const dimensions = useWindowDimensions();
  return (
    <img
      className={`hero-image justify-self-end ${
        dimensions.width >= md && "self-center"
      }`}
      src={imageUrl}
      alt={altText}
    />
  );
}

export { HeroButton, HeroDescription, HeroImage, HeroTitles };
