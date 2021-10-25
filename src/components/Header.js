import { Link } from "react-router-dom";

function Header(props){
    return ( 
        <nav className="nav">
            <Link to ="/">
                <h1>🦅 PhillyDilly 🦅 </h1>
            </Link>
        </nav>
    )
}

export default Header;