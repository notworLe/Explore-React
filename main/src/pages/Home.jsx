import { Link } from "react-router";



export default function Home() {
  return (
    <div>
      <div className="section">
        <div className="section-header">
          <h1>notworLe</h1>
        </div>
        <Link to="/game">
          <button className="btn">List games</button>
        </Link>
      </div>
    </div>
  )
}