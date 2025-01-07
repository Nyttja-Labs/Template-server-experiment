import './App.css'

function App() {
  return (
    <div className="minimal-container">
      <header className="minimal-header">
        <h1>Simple Landing</h1>
      </header>
      
      <main className="minimal-main">
        <h2>Welcome to Simple Solutions</h2>
        <p>We provide modern, efficient tools for your business needs.</p>
        <button 
          className="minimal-cta"
          onClick={() => window.location.href = '#signup'}
        >
          Get Started
        </button>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🚀</div>
            <h3>Fast Performance</h3>
            <p>Our solutions are optimized for speed and efficiency.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔒</div>
            <h3>Secure Systems</h3>
            <p>We prioritize your data security and privacy.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">💡</div>
            <h3>Innovative Features</h3>
            <p>Stay ahead with our cutting-edge technology.</p>
          </div>
        </div>
      </main>

      <footer className="minimal-footer">
        <p>&copy; {new Date().getFullYear()} Simple Landing</p>
      </footer>
    </div>
  )
}

export default App
