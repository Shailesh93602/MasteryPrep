import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      {/* Introduction/Welcome Section */}
      <section className="welcome-section">
        <h1>Welcome to My Learning Hub</h1>
        <p>Your go-to place for learning programming and problem-solving.</p>
      </section>

      {/* Featured Content */}
      <section className="featured-content">
        <h2>Explore Popular Topics</h2>
        {/* Add featured content or topics here */}
      </section>

      {/* About Section */}
      <section className="about-section">
        <h2>About Us</h2>
        <p>We are passionate about making programming accessible to everyone...</p>
      </section>

      {/* Call-to-Action (CTA) */}
      <section className="cta-section">
        <p>Ready to start learning? Explore our tutorials now!</p>
        <Link to="/oops/classes" className="cta-button">Get Started</Link>
      </section>

      {/* Latest Updates or Blog Section */}
      <section className="latest-updates">
        <h2>Latest Updates</h2>
        {/* Display latest blog posts or updates */}
      </section>

      {/* Contact Information */}
      <section className="contact-section">
        <h2>Contact Us</h2>
        <p>Have questions or suggestions? Reach out to us at info@example.com.</p>
      </section>

      {/* Testimonials or User Reviews */}
      <section className="testimonials-section">
        <h2>What Our Users Say</h2>
        {/* Display user testimonials or reviews */}
      </section>

      {/* Social Media Integration */}
      <section className="social-media-section">
        <h2>Connect with Us</h2>
        {/* Add social media links/icons */}
      </section>

      {/* Site Footer */}
      <footer className="site-footer">
        <div className="footer-links">
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms of Service</Link>
        </div>
        <p>&copy; 2024 My Learning Hub. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
