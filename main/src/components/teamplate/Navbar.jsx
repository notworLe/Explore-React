import { Link, NavLink } from "react-router";

const urlList = [
    {
        path: '/',
        content: 'Introduction'
    }, 
    {
        path: '/tic-toe-tac',
        content: 'tic-toe-tac'
    }
];


export default function Main() {

    return (
        <nav className="navbar surface">
            <div className="container wide">
                <Link to="/" className="navbar-brand surface">
                    NOTWORLE REACT.
                </Link>
                
                <div className="navbar-links surface">
                    {
                        urlList.map(url => 
                            <NavLink
                                to={url.path}
                            >
                                {url.content}
                            </NavLink>
                        )
                    }
                </div>
                
            </div>
        </nav>
    )
}