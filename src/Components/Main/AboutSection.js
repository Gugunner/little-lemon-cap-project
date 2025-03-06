import "../../styles/about.css";

export default function AboutSection() {
  return (
    <section className="about outline">
      <div className="constrain-content outline full-height vertical-padding-32">
        <div className="grid about-grid full-height">
          <div className="titles">
            <h1 className="display-title">Little Lemon</h1>
            <h2 className="sub-title">Chicago</h2>
          </div>
          <div className="about-description">
            <p className="card-title-height">
              Lorem ipsum odor amet, consectetuer adipiscing elit. In hendrerit
              facilisi condimentum dis erat vivamus; vehicula massa gravida.
              Mollis laoreet duis felis laoreet lacinia rutrum porta laoreet
              fermentum. Dignissim taciti morbi natoque finibus pulvinar.
            </p>
          </div>
          <div className="about-founder-portraits full-width">
            {[1, 2].map((v) => (
              <img
                src="/assets/images/founder.png"
                alt="Founder of Restaurant portrait"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
