import { Link } from "react-router";

const projects = [
  { 
    title: 'Tic Tac Toe', 
    path: '/game/TicToeTac', 
    color: 'var(--green)', 
    desc: 'Classic 2-player game built with React hooks — useState, props, lifting state up, and win detection.',
    tags: ['useState', 'props', 'immutability'],
    status: 'Done'
  }
  // { title: 'Badge', path: '/components/badge', color: 'var(--pink)', desc: 'Status badges' },
  // { title: 'Card', path: '/components/card', color: 'var(--blue)', desc: 'Content cards' },
]

export default function Home() {
  return (
    <>
      <div className="hero">
        <div className="container">
          <div className="hero-content">
              <div className="badge mb-md">
                React
              </div>
            <h1 className="hero-title mb-lg">NOT
              WORLE
              REACT</h1>
            <p className="hero-subtitle mb-md">
              See all my react projects
            </p>
            <p className="hero-description mb-md">
              Hope everyone can give me a feeback for me. It helps me improve skills a lot.
            </p>
             <div className="flex mb-lg" style={{ gap: '1rem' }}>
              <a 
                href="https://github.com/notworLe" 
                target="_blank"
                rel="noreferrer"
                className="btn"
                style={{ textDecoration: 'none' }}
              >
                ↗ GitHub
              </a>
              <a 
                href="https://www.tiktok.com/@notworle"
                className="btn"
                style={{ 
                  textDecoration: 'none',
                  background: 'var(--surface)',
                  color: 'var(--white)',
                  border: '3px solid var(--white)',
                  boxShadow: '3px 3px 0 0 var(--white)'
                }}
              >
                ✉ tiktok
              </a>


              <a 
                href="https://www.youtube.com/@LeLe-pn8bo"
                className="btn"
                style={{ 
                  textDecoration: 'none',
                  background: 'var(--blue)',
                  color: 'var(--black)',
                  border: '3px solid var(--white)',
                  boxShadow: '3px 3px 0 0 var(--white)'
                }}
              >
                ✉ Youtube
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="section" style={{height: 900}}>
        <div className="container">
          <div className="badge">
          1. Tic-toe-tac
        </div>
        <div className="badge-group mb-md">
          {
            projects.map(project =>
              project.tags.map(tag => 
                <div className="badge badge-lavender">
                  {tag}
              </div>
              )
          )
        }
        </div>
        
        <h2 className="mb-md">Local tic toe tac</h2>
        
        
        <div className="grid-2">
          <div>{projects[0].desc}</div>
          <div>Hi</div>
        </div>
        </div>

        
      </div>

      
    </>

    
  )
}