import './App.css'

function App() {
  return (
    <div className="minimal-container">
      <header className="minimal-header">
        <h1>Simple Landing</h1>
      </header>
      
      <main className="minimal-main">
        <h2>Welcome to Our Site</h2>
        <p>We provide simple solutions for modern needs.</p>
        <button 
          className="minimal-cta"
          onClick={() => window.location.href = '#signup'}
        >
          Get Started
        </button>
      </main>

      <footer className="minimal-footer">
        <p>&copy; {new Date().getFullYear()} Simple Landing</p>
      </footer>
    </div>
  )
}

export default App
