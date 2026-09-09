import React from "react";
import { Link } from "react-router-dom";

const storyPoints = [
  {
    title: "Trusted quality",
    text: "We source only dependable, high-performing devices and accessories that meet our strict quality standards.",
  },
  {
    title: "Fast support",
    text: "Our support team helps customers choose the best phone, laptop, or accessory for work, study, and everyday life.",
  },
  {
    title: "Smart value",
    text: "We combine premium technology with competitive pricing so customers get real value without compromise.",
  },
];

const About = () => {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="about-copy">
          <p className="eyebrow">About us</p>
          <h1>We make technology easier to love.</h1>
          <p>
            Prime Tech is a modern electronics store built for people who want
            reliable devices, smart upgrades, and excellent customer care.
          </p>
        </div>

        <div className="about-visual">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80"
            alt="Prime Tech team working"
          />
        </div>
      </section>

      <section className="about-metrics">
        <div>
          <strong>8+</strong>
          <span>Years in electronics</span>
        </div>
        <div>
          <strong>25k+</strong>
          <span>Products delivered</span>
        </div>
        <div>
          <strong>96%</strong>
          <span>Customer satisfaction</span>
        </div>
      </section>

      <section className="about-story">
        <div className="story-heading">
          <p className="eyebrow">Our story</p>
          <h2>Built around better everyday tech.</h2>
        </div>

        <div className="story-grid">
          {storyPoints.map((point) => (
            <article className="story-card" key={point.title}>
              <h3>{point.title}</h3>
              <p>{point.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-cta">
        <h2>Need help choosing the right device?</h2>
        <p>
          Our team is ready to guide you to the best phone, laptop, or accessory
          for your lifestyle and budget.
        </p>
        <Link to="/contact" className="btn btn-primary">
          Contact us
        </Link>
      </section>
    </div>
  );
};

export default About;
