import "../../styles/highlights.css";

import { lg, md } from "../../Constants/sizes";

import HorizontalLayout from "../HorizontalLayout";

import useWindowDimensions from "../../Hooks/useWindowDimensions";

function SpecialDish() {
  return (
    <div
      className="special-dish-container border-top-radius-8 outline grid special-dish-grid"
      onClick={() => console.log("Clicked")}
    >
      <img src="/assets/images/greek-salad.png" alt="Greek salad" />
      <div className="horizontal-padding-12 vertical-bpadding-28 grid special-dish-vgrid">
        <div className="grid special-dish-hgrid">
          <h4 className="card-title justify-self-start">Greek Salad</h4>
          <h4 className="card-title special-dish-price justify-self-end">
            $ 12.99
          </h4>
        </div>
        <p className="paragraph-text special-dish-description">
          The famous greek salad of crispy lettuce, peppers, olives and our
          Chicago style feta cheese, garnished with crunchy garlic and rosemary
          croutons.
        </p>
        <div className="grid special-dish-hgrid">
          <p className="highlight-text">Order a delivery</p>
          <img
            className="horizontal-lmargin-4"
            src="/assets/svgs/motorcycle.svg"
            alt="A motorcycle icon"
          />
        </div>
      </div>
    </div>
  );
}

function ScrollableDishes() {
  return (
    <div className="scroll-container border-top-radius-8">
      <div className="scrollx-content border-top-radius-8">
        {[1, 2, 3].map((v) => {
          return <SpecialDish key={v} />;
        })}
      </div>
    </div>
  );
}

function SpecialsTitle({ width }) {
  return (
    <h2
      className={`${
        width >= lg ? "display-title" : "sub-title"
      } specials-title`}
    >
      This weeks specials!
    </h2>
  );
}

function OnlineMenuButton({ width }) {
  return (
    <button className={`card-title ${width < md ? "vertical-tmargin-24" : ""}`}>
      Online Menu
    </button>
  );
}

function SpecialsAppealAction() {
  const { width } = useWindowDimensions();
  return (
    <>
      <SpecialsTitle width={width} />
      <OnlineMenuButton width={width} />
    </>
  );
}

function DesktopHighlightsSection() {
  return (
    <div className="flex-column justify-center full-height">
      <div className="flex-row justify-between center-items">
        <SpecialsAppealAction />
      </div>
      <div className="vertical-tmargin-40">
        <ScrollableDishes />
      </div>
    </div>
  );
}

function MobileHighlightsSection() {
  return (
    <div className="flex-column justify-around center-items full-height">
      <div className="flex-column center-items">
        <SpecialsAppealAction />
      </div>
      <ScrollableDishes />
    </div>
  );
}

export default function HighlightsSection() {
  return (
    <section className="highlights outline">
      <div className="constrain-content outline full-height">
        <HorizontalLayout>
          <DesktopHighlightsSection />
          <MobileHighlightsSection />
        </HorizontalLayout>
      </div>
    </section>
  );
}
