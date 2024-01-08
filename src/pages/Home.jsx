import React from "react";
import { Link } from "react-router-dom";
import "../styles/Topic.css";

const Home = () => {
  return (
    <div className="topic-content">
      <section className="welcome-section">
        <h1>Welcome to My MasteryPrep</h1>
        <p>Your go-to place for learning programming fundamentals and get ready to crack tech Interviews.</p>
      </section>

      <section className="featured-content">
        <h2>Explore Popular Topics</h2>
        <Link to="/oops">Object-Oriented Programming</Link> <br />
        <Link to="/dsa">Data Structure and Algorithms</Link> <br />
        <Link to="/sql">Structured Query Language</Link> <br />
        <Link to="/ps">Problem Solving</Link> <br />
        <Link to="/ciq">Common Interview Questions</Link> <br />
      </section>

      <section className="about-section">
        <h2>About Us</h2>
        <p>
          We are passionate about making programming accessible to everyone...
        </p>
      </section>

      <section className="cta-section">
        <p>Ready to start learning? Explore our tutorials now!</p>
        <Link to="/oops" className="cta-button">
          Get Started
        </Link>
      </section>

      <section className="latest-updates">
        <h2>Latest Updates</h2>
        <Link to="/dsa" className="cta-button">
          Learn Dsa
        </Link>
      </section>

      <section className="contact-section">
        <h2>Contact Us</h2>
        <p>
          Have questions or suggestions? Reach out to us at
          shailesh93602@gmail.com.
        </p>
      </section>
      {/* 
      <section className="testimonials-section">
        <h2>What Our Users Say</h2>
      </section> */}

      {/* <section className="social-media-section">
        <h2>Connect with Us</h2>
      </section> */}

      {/* <footer className="site-footer">
        <div className="footer-links">
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms of Service</Link>
        </div>
        <p>&copy; 2024 MasterPrep. All rights reserved.</p>
      </footer> */}
    </div>
  );
};

export default Home;
