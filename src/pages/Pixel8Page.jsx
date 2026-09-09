import React from "react";
import { Link } from "react-router-dom";
import pixel8Image from "../Google-Pixel-8-Rose.webp";

const product = {
  id: 8,
  name: "Pixel 8",
  category: "Phones",
  price: "₦699",
  tag: "Smart Choice",
  image: pixel8Image,
  description:
    "Clean Android experience, intelligent photography, and dependable battery life in a compact, beautifully designed phone.",
};

const highlights = [
  {
    title: "Smart camera",
    text: "Capture rich detail in all lighting conditions with a responsive AI-powered camera system.",
  },
  {
    title: "Vivid display",
    text: "Enjoy crisp visuals and smooth scrolling on a bright, fluid screen built for daily use.",
  },
  {
    title: "All-day power",
    text: "Stay connected longer with dependable battery life, fast charging, and efficient performance.",
  },
];

const Pixel8Page = () => {
  return (
    <main className="gallery-page">
      <section className="gallery-hero">
        <div className="gallery-copy">
          <p className="eyebrow">Featured product</p>
          <h1>{product.name}</h1>
          <p>{product.description}</p>

          <div className="product-meta">
            <strong>{product.price}</strong>
            <button
              type="button"
              className="add-btn compact-btn cart-btn"
              aria-label="Add to cart"
            >
              🛒
            </button>
          </div>

          <div style={{ marginTop: "18px" }}>
            <Link to="/gallery" className="btn btn-primary">
              Back to gallery
            </Link>
          </div>
        </div>

        <div className="gallery-visual">
          <img src={product.image} alt={product.name} />
        </div>
      </section>

      <section className="gallery-story">
        <div className="story-heading">
          <p className="eyebrow">Why people love it</p>
          <h2>Built for everyday brilliance.</h2>
        </div>

        <div className="story-grid">
          {highlights.map((item) => (
            <article className="story-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Pixel8Page;
