import { Link } from "react-router";

const projects = [
  { title: 'Tic Tac Toe', path: '/game/TicToeTac', color: 'var(--green)', desc: 'Classic game' },
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
          </div>
        </div>
      </div>

      <div className="section" style={{height: 900}}>
        Hello
      </div>
    </>

    
  )
}