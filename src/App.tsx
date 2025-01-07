import './App.css'

function App() {
  return (
    <>
      <header className="header">
        <div className="container">
          <h1 className="logo">AwesomeProduct</h1>
          <nav>
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="container">
          <h1>Simplify Your Workflow</h1>
          <p>
            The all-in-one solution for modern teams. Fast, secure, and easy to use.
          </p>
          <div className="cta-buttons">
            <button 
              className="cta-button primary"
              onClick={() => window.location.href = '#signup'}
            >
              Get Started
            </button>
            <button 
              className="cta-button secondary"
              onClick={() => window.location.href = '#features'}
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      <section id="features" className="features">
        <div className="container">
          <h2>Why Choose Us</h2>
          <div className="feature-grid">
            <div className="feature-card">
              <h3>⚡ Fast & Simple</h3>
              <p>Get started in minutes with our intuitive interface.</p>
            </div>
            <div className="feature-card">
              <h3>🔒 Built-in Security</h3>
              <p>Your data is protected with enterprise-grade encryption.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="pricing">
        <div className="container">
          <h2>Simple Pricing</h2>
          <div className="pricing-grid">
            <div className="pricing-card">
              <h3>Starter</h3>
              <p className="price">$9<span>/mo</span></p>
              <ul>
                <li>✓ 10 Projects</li>
                <li>✓ Basic Support</li>
                <li>✓ 1GB Storage</li>
              </ul>
              <button className="cta-button secondary">Choose Plan</button>
            </div>
            <div className="pricing-card popular">
              <h3>Pro</h3>
              <p className="price">$29<span>/mo</span></p>
              <ul>
                <li>✓ Unlimited Projects</li>
                <li>✓ Priority Support</li>
                <li>✓ 10GB Storage</li>
                <li>✓ Team Features</li>
              </ul>
              <button className="cta-button primary">Choose Plan</button>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>AwesomeProduct</h3>
              <p>Simplifying workflows since 2025</p>
            </div>
            <div className="footer-section">
              <h4>Quick Links</h4>
              <a href="#features">Features</a>
              <a href="#pricing">Pricing</a>
              <a href="#contact">Contact</a>
            </div>
            <div className="footer-section">
              <h4>Legal</h4>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 AwesomeProduct. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
