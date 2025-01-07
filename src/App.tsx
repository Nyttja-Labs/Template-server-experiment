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
          <h1>Welcome to Our Awesome Product</h1>
          <p>
            Discover the future of innovation with our cutting-edge solution. 
            Join thousands of satisfied users who are transforming their lives.
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
          <h2>Key Features</h2>
          <div className="feature-grid">
            <div className="feature-card">
              <h3>⚡ Fast Performance</h3>
              <p>Experience blazing fast speeds with our optimized architecture.</p>
            </div>
            <div className="feature-card">
              <h3>🔒 Secure & Reliable</h3>
              <p>Enterprise-grade security to keep your data safe.</p>
            </div>
            <div className="feature-card">
              <h3>🌍 Global Reach</h3>
              <p>Available worldwide with 24/7 support in multiple languages.</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 AwesomeProduct. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}

export default App
