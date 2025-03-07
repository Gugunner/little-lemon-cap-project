import React from "react";
import "../../styles/testimonials.css";

import { range } from "../../utils/array.js";
import {
  getWholePart,
  isAboveFractionalThreshold,
} from "../../utils/number.js";

function StarRating({ rating }) {
  const filledStarCount = getWholePart(rating);
  const hasHalfFilledStar = isAboveFractionalThreshold(rating);
  return (
    <>
      {range(0, filledStarCount, 1).map((v) => (
        <img
          key={`filled-${v}`}
          src="/assets/svgs/filled-star.svg"
          alt="Filled Star"
        />
      ))}
      {hasHalfFilledStar && (
        <img
          key="half-filled-1"
          src="/assets/svgs/half-filled-star.svg"
          alt="Filled Star"
        />
      )}
      {range(0, 5 - filledStarCount - (hasHalfFilledStar ? 1 : 0), 1).map(
        (v) => (
          <img
            key={`empty-${v}`}
            src="/assets/svgs/empty-star.svg"
            alt="Filled Star"
          />
        )
      )}
    </>
  );
}

function Testimonial() {
  return (
    <div className="grid testimonial-grid outline vertical-padding-16 horizontal-padding-16">
      <div className="grid star-hgrid">
        <p>5</p>
        <div>
          <StarRating rating={4.57} />
        </div>
      </div>
      <div className="grid user-hgrid">
        <img
          src="/assets/images/testimonial-user.png"
          alt="A user testimonal"
        />
        <p className="highlight-text">Lisa Helfer</p>
      </div>
      <p className="paragraph-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor.
      </p>
    </div>
  );
}

function TestimonialScroll() {
  return (
    <div className="scroll-container">
      <div className="scrollx-content">
        {[1, 2, 3, 4].map((v) => (
          <Testimonial key={v} />
        ))}
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="testimonials outline">
      <div className="constrain-content outline full-height">
        <div className="grid testimonials-grid full-height vertical-padding-20">
          <div>
            <h2 className="sub-title-spacing">Testimonials</h2>
          </div>
          <TestimonialScroll />
        </div>
      </div>
    </section>
  );
}
