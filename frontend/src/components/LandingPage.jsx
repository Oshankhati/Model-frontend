import React from 'react';
import './LandingPage.css';
import heroImage1 from '../assets/insurance-image2.jpg'; // elderly group
import heroImage2 from '../assets/kids-circle.jpg';     // kids group
import logo from '../assets/knight-chess-piece.png';
export default function LandingPage() {
  return (
    <div className="landing-container">
      <header className="navbar">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo-img" />
          <span className="logo-text">InSureAi</span>
        </div>
        <nav>
          <a href="#">Home</a>
          <a href="#">About Us</a>
          <a href="#">Insurance</a>
          <a href="#">How it works</a>
        </nav>
        <button className="signup-btn">Sign Up</button>
      </header>

      <section className="hero-section">
        <div className="hero-text">
          <h1>AI-powered clarity<br />for every claim</h1>
          <button className="cta-btn">Get Started Today</button>
        </div>
        <div className="hero-images">
          <div className="circle large">
            <img src={heroImage1} alt="Happy Elderly" />
          </div>
          <div className="circle small">
            <img src={heroImage2} alt="Happy Kids" />
          </div>
        </div>
      </section>

      <section className="steps-section">
        <h2>Yours Claim, Simplified.</h2>
        <p>Navigating insurance claims doesn't have to be complex. InSureAi transforms your experience in three simple steps:</p>
        <div className="steps-grid">
          <div className="step-card">
            <h3>1. Submit Your Query</h3>
            <p>Just tell us about your claim in plain language. Our AI understands your natural questions, just like a human.</p>
          </div>
          <div className="step-card">
            <h3>2. Instant Policy Analysis</h3>
            <p>InSureAi rapidly scans thousands of pages of your policy documents to find every relevant clause and rule.</p>
          </div>
          <div className="step-card">
            <h3>3. Clear Decision & Explanation</h3>
            <p>Receive an immediate, precise decision – approved or rejected – along with the exact policy clauses that led to the outcome.</p>
          </div>
        </div>
      </section>

      <section className="why-section">
        <h2>Why choose InSureAi?</h2>
        <p>In a world of complex policies. InSureAi brings unparalleled advantages to your insurance experience.</p>
        <div className="benefits-grid">
          <div className="benefit-card"><h4>1. Unrivaled Speed</h4><p>Get instant claim decisions. Time is money, especially in emergencies.</p></div>
          <div className="benefit-card"><h4>2. Crystal-Clear Transparency</h4><p>Every decision comes with precise, auditable justification from your documents.</p></div>
          <div className="benefit-card"><h4>3. Effortless Understanding</h4><p>No more sifting through jargon. AI translates legal terms into straightforward answers.</p></div>
          <div className="benefit-card"><h4>4. Fairness & Accuracy</h4><p>InSureAi ensures consistent, unbiased evaluations every time.</p></div>
        </div>
      </section>

      <section className="mission-section">
        <div className="mission-content">
          <h2>Our Mission: Clarity in insurance.</h2>
          <p>At InSureAi, we believe everyone deserves clear, fast, and fair access to their insurance benefits. We’re building a future where policyholders feel empowered, not overwhelmed.</p>
        </div>
      </section>

      <section className="ready-section">
        <h2>Ready for Claim Clarity?</h2>
        <p>Join the revolution in insurance. Experience the power of AI-driven evaluation today.</p>
        <button className="start-btn">Start your claim now!</button>
      </section>

      <footer>
        <div className="footer-logo">🦓 InSureAi</div>
        <div className="footer-links">
          <div>
            <strong>Quick Links</strong>
            <p>About Us</p>
            <p>Insurance</p>
            <p>How it works?</p>
          </div>
          <div>
            <strong>Contact Us</strong>
            <p>📧 support@insureai.com</p>
            <p>📞 +91-XXXXXXXXXX</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
