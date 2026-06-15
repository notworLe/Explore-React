import { Link } from "react-router";



export default function Home() {
  return (
    <div>
      <div className="section">
        <div className="section-header">
          <h1>notworLe</h1>
        </div>
            <Link to="/">
                <button className="btn">Back home</button>
            </Link>
            
            <Link to="/game/TicToeTac">
                <button className="btn">Tic toe tac</button>
            </Link>
    
      </div>
    </div>
  )
}