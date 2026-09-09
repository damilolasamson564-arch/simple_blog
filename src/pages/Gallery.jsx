import React from "react";
import { Link } from "react-router-dom";
import iphone7Image from "../images.jpg";
import pixel8Image from "../Google-Pixel-8-Rose.webp";
import iphone15ProImage from "../images (1).jpg";

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

const products = [
  {
    id: 1,
    name: "Nova X15",
    category: "Phones",
    price: "₦849",
    tag: "Best Seller",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80",
    description: "Ultra-clear display, all-day battery, and pro-grade camera system.",
  },
  {
    id: 6,
    name: "iPhone 15 Pro",
    category: "Phones",
    price: "₦999",
    tag: "Featured",
    image: iphone15ProImage,
    description: "Titanium design, advanced camera controls, and powerful everyday performance.",
  },
  {
    id: 7,
    name: "Galaxy S24 Ultra",
    category: "Phones",
    price: "₦1,199",
    tag: "Premium Pick",
    image:
      "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=900&q=80",
    description: "Large vivid display, versatile zoom camera, and built-in productivity tools.",
  },
  {
    id: 8,
    name: "Pixel 8",
    category: "Phones",
    price: "₦699",
    tag: "Smart Choice",
    image: pixel8Image,
    description: "Clean Android experience, intelligent photography, and dependable battery life.",
  },
  {
    id: 9,
    name: "OnePlus 12",
    category: "Phones",
    price: "₦799",
    tag: "Fast Performance",
    image: 
      "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=900&q=80",
    description: "Smooth high-refresh display, rapid charging, and flagship-level speed.",
  },
  {
    id: 2,
    name: "AeroBook Pro 14",
    category: "Laptops",
    price: "₦1,299",
    tag: "New Arrival",
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=900&q=80",
    description: "Lightweight design, fast performance, and brilliant 14-inch display.",
  },
  {
    id: 3,
    name: "SoundPulse Mini",
    category: "Accessories",
    price: "₦129",
    tag: "Hot Deal",
    image:
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=900&q=80",
    description: "Portable speaker with deep bass, crystal sound, and 18-hour battery.",
  },
  {
    id: 4,
    name: "VoltCharge Pro",
    category: "Accessories",
    price: "₦49",
    tag: "Top Rated",
    image:
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=900&q=80",
    description: "Fast charger with 3-in-1 cable support for your everyday devices.",
  },
  {
    id: 5,
    name: "Iphone 7",
    category: "Phones",
    price: "₦49",
    tag: "Top Rated",
    image: iphone7Image,
    description: "Fast charger with 3-in-1 cable support for your everyday devices.",
  },
];

const Gallery = () => {
  return (
    <div className="gallery-page">
     <section className="gallery-hero">
      <div className="gallery-copy">
        {/* <p className="eyebrow">Our Gallery</p> */}
        {/* <h1>We make technology easier to love.</h1> */}
        {/* <p>
            Prime Tech is a modern electronics store built for people who want
            reliable devices, smart upgrades, and excellent customer care.
          </p> */}
        </div>

        {/* <div className="gallery-visual">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80"
            alt="Prime Tech team working"
          />
        </div> */}
      </section>

      <section className="gallery-metrics">
        <div>
          {/* <strong>8+</strong> */}
          {/* <span>Years in electronics</span> */}
        </div>
        <div>
          {/* <strong>25k+</strong> */}
          {/* <span>Products delivered</span> */}
        </div>
        <div>
          {/* <strong>96%</strong> */}
          {/* <span>Customer satisfaction</span> */}
        </div>
      </section>

      <section className="gallery-products">
        <div className="story-heading">
          <p className="eyebrow">Featured items</p>
          <h2>Browse our tech collection</h2>
        </div>

        <div className="gallery-product-grid">
          {products.map((product) => (
            <article className="gallery-product-card" key={product.id}>
              <div className="gallery-product-image-wrap">
                <span className="product-tag">{product.tag}</span>
                <img src={product.image} alt={product.name} />
              </div>
              <div className="gallery-product-info">
                <span className="product-category">{product.category}</span>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <div className="product-meta">
                  <strong>{product.price}</strong>
                  {product.id === 8 ? (
                    <>
                      <button type="button" className="add-btn compact-btn cart-btn" aria-label="Add to cart">
                        🛒
                      </button>
                      <Link to="/gallery/pixel-8" className="add-btn compact-btn">
                        View more
                      </Link>
                    </>
                  ) : (
                    <button type="button" className="add-btn compact-btn cart-btn" aria-label="Add to cart">
                      🛒
                    </button>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

       <section className="gallery-story">
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

      <section className="gallery-cta">
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
export default Gallery;
