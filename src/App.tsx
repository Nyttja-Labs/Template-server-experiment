import './App.css'

function App() {
  return (
    <>
      <header className="header">
        <div className="container">
          <h1 className="logo">AwesomeProduct</h1>
        </div>
      </header>

      <section className="hero">
        <div className="container">
          <h1>Simplify Your Workflow</h1>
          <p>
            The all-in-one solution for modern teams. Fast, secure, and easy to use.
          </p>
          <button 
            className="cta-button primary"
            onClick={() => window.location.href = '#signup'}
          >
            Get Started
          </button>
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

      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 AwesomeProduct</p>
        </div>
      </footer>
    </>
  )
}

export default App
