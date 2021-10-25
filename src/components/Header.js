import { Link } from "react-router-dom";

function Header(props){
    return ( 
        <nav className="nav">
            <Link to ="/">
                <div>PhillyDilly</div>
            </Link>
            <Link to ="/about">
                <div>About</div>
            </Link>
            <Link to="/create">
                <div>Create New Post</div>
            </Link>
        </nav>
    )
}

export default Header;