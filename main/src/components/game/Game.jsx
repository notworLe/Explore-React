import { Link } from "react-router";

export default function Game() {
  return (
    <div className="container page">
      <div className="section-header" style={{ backgroundColor: 'var(--blue)' }}>
        <h1>Games Collection</h1>
        <p>A list of mini-games built with React.</p>
      </div>
      
      <div className="grid-2 project-grid">
        <Link to="/game/TicToeTac" className="project-card" style={{ backgroundColor: 'var(--green)' }}>
          <h2>Tic Tac Toe</h2>
          <p>The classic paper-and-pencil game for two players.</p>
        </Link>
        
        <Link to="/" className="project-card flex-center" style={{ backgroundColor: 'var(--yellow)' }}>
          <h2>← Back to Home</h2>
        </Link>
      </div>
    </div>
  )
}