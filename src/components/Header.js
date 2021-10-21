import {Link} from "react-router-dom";

export default function Header(props){
    return (
      <nav className="nav">
        <Link to="/">
          <div>PhillyDilly</div>
        </Link>
      </nav>
    );
  }   