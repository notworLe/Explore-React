import {Link } from 'react-router-dom'

export default function Home() {
    return (
        <div>
            <h1>Home</h1>
            <nav style={{ display: 'flex', gap: '16px', marginTop: '16px'}}>
                <Link to="/badge">Badge</Link>
                <Link to="/card">Card</Link>
            </nav>
        </div>
    )
}

