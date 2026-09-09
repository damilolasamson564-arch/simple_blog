import React from "react";

const categories = [
  {
    name: "Phones",
    description: "Flagship and everyday smartphones",
    icon: "📱",
  },
  {
    name: "Laptops",
    description: "Performance machines for work and play",
    icon: "💻",
  },
  {
    name: "Accessories",
    description: "Cables, speakers, chargers, and more",
    icon: "🎧",
  },
];

const phoneCollection = [
  {
    name: "Nova X15",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "ZenPhone 9",
    image:
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Apex S12",
    image:
      "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Pixel Vibe",
    image:
      "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?auto=format&fit=crop&w=900&q=80",
  },
];

 const products = [
  {
    id: 1,
    name: "Nova X15",
    category: "Phones",
    price: "₦849,000",
    tag: "Best Seller",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80",
    description: "Ultra-clear display, all-day battery, and pro-grade camera system.",
  },
  {
    id: 2,
    name: "AeroBook Pro 14",
    category: "Laptops",
    price: "₦1,299,000",
    tag: "New Arrival",
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=900&q=80",
    description: "Lightweight design, fast performance, and brilliant 14-inch display.",
  },
  {
    id: 3,
    name: "SoundPulse Mini",
    category: "Accessories",
    price: "₦129,000",
    tag: "Hot Deal",
    image:
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=900&q=80",
    description: "Portable speaker with deep bass, crystal sound, and 18-hour battery.",
  },
  {
    id: 4,
    name: "VoltCharge Pro",
    category: "Accessories",
    price: "₦49,000",
    tag: "Top Rated",
    image:
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=900&q=80",
    description: "Fast charger with 3-in-1 cable support for your everyday devices.",
  },
  {
    id: 5,
    name: "ZenPhone 9",
    category: "Phones",
    price: "₦999,000",
    tag: "Trending",
    image:
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80",
    description: "Smooth performance, premium finish, and advanced mobile photography.",
  },
  {
    id: 6,
    name: "FlexBook Air 13",
    category: "Laptops",
    price: "₦1,099,000",
    tag: "Limited",
    image:
      "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=900&q=80",
    description: "Thin, powerful, and built for creators, students, and remote teams.",
  },
];

const highlights = [
  "Free nationwide delivery",
  "2-year product warranty",
  "Secure payment protection",
  "Expert tech support",
];

const Home = () => {
  return (
    <div className="storefront">
      <section className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">Smart tech for modern life</p>
          <h1>Phones, laptops and accessories built to perform.</h1>
          <p className="hero-text">
            Discover premium gadgets with cutting-edge features, reliable quality,
            and unbeatable value for everyday living and work.
          </p>
          <div className="hero-actions">
            <button type="button" className="btn btn-primary">Shop now</button>
            <button type="button" className="btn btn-secondary">Explore deals</button>
          </div>
          <div className="hero-metrics">
            <div>
              <strong>25k+</strong>
              <span>Happy buyers</span>
            </div>
            <div>
              <strong>4.9/5</strong>
              <span>Average rating</span>
            </div>
            <div>
              <strong>48h</strong>
              <span>Fast delivery</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="product-badge">New Collection</div>
          <img
            src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=900&q=80"
            alt="Premium tech showcase"
          />
        </div>
      </section>

      <div className="feature-strip">
        {highlights.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>

      <section className="category-section">
        <div className="section-heading">
          <p className="eyebrow">Categories</p>
          <h2>Shop by essentials</h2>
        </div>

        <div className="category-grid">
          {categories.map((category) => (
            <div className="category-card" key={category.name}>
              <div className="category-icon">{category.icon}</div>
              <h3>{category.name}</h3>
              <p>{category.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="phone-gallery-section">
        <div className="section-heading inline-heading">
          <div>
            <p className="eyebrow">Phone collection</p>
            <h2>Latest smartphones</h2>
          </div>
          <button type="button" className="btn btn-secondary">See all phones</button>
        </div>

        <div className="phone-gallery-grid">
          {phoneCollection.map((phone) => (
            <div className="phone-gallery-card" key={phone.name}>
              <img src={phone.image} alt={phone.name} />
              <div className="phone-gallery-info">
                <h3>{phone.name}</h3>
                <button type="button" className="add-btn">Shop now</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="promo-banner">
        <div>
          <p className="eyebrow promo-eyebrow">Weekend Deal</p>
          <h3>Save up to 35% on premium tech bundles.</h3>
        </div>
        <button type="button" className="btn btn-primary">Claim offer</button>
      </section>

      <section className="products-section">
        <div className="section-heading inline-heading">
          <div>
            <p className="eyebrow">Featured products</p>
            <h2>Top picks this week</h2>
          </div>
          <button type="button" className="btn btn-secondary">View all</button>
        </div>

        <div className="product-grid">
          {products.map((product) => (
            <article className="product-card" key={product.id}>
              <div className="product-image-wrap">
                <span className="product-tag">{product.tag}</span>
                <img src={product.image} alt={product.name} />
              </div>

              <div className="product-info">
                <span className="product-category">{product.category}</span>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <div className="product-meta">
                  <strong>{product.price}</strong>
                  <button type="button" className="add-btn">Add to cart</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer className="site-footer">
        <div>
          <h3>PrimeTech</h3>
          <p>Smart devices, smarter living.</p>
        </div>
        <div>
          <h4>Shop</h4>
          <ul>
            <li>Phones</li>
            <li>Laptops</li>
            <li>Accessories</li>
          </ul>
        </div>
        <div>
          <h4>Support</h4>
          <ul>
            <li>Shipping</li>
            <li>Returns</li>
            <li>Contact</li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Home;
