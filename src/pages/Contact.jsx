import React from "react";

const Contact = () => {
  return (
    <main className="contact-page">
      <section className="contact-card">
        <div className="contact-copy">
          <p className="eyebrow">Contact us</p>
          <h1>We’d love to hear from you.</h1>
          <p>
            Reach out for product advice, support, or custom recommendations for
            your next upgrade.
          </p>
          <ul className="contact-details">
            <li>Email: hello@primetech.com</li>
            <li>Phone: +234 8162951322</li>
            <li>Location: Lagos, Ikeja, Nigeria</li>
          </ul>
        </div>

        <form
          className="contact-form"
          action="mailto:hello@primetech.com"
          method="post"
          encType="text/plain"
        >
          <div className="form-group">
            <label htmlFor="name">Full name</label>
            <input id="name" name="name" type="text" placeholder="Your name" />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" placeholder="you@example.com" />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" placeholder="How can we help?" />
          </div>

          <button type="submit" className="btn btn-primary">
            Send message
          </button>
        </form>
      </section>
    </main>
  );
};

export default Contact;
