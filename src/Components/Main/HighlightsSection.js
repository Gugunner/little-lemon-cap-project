import "../../styles/landing.css";
import "../../styles/helpers.css";
import "../../styles/fonts.css";
import "../../styles/highlights.css";

function Dish() {
  return <div className="special-dish-container"></div>;
}

export default function HighlightsSection() {
  return (
    <section className="highlights outline">
      <div className="flex-column">
        <div className="constrain-content no-xresize outline">
          <h2 className="h2-black">This weeks specials!</h2>
          <button className="card-title">Online Menu</button>
          <div className="scroll-container">
            <div className="scrollx-content outline">
              {[1, 2].map((v) => {
                return <Dish key={v} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
