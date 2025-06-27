import {Link} from "react-router-dom";
import "../css/NavBar.css";

function NavBar(){
    return (
    <nav className="navbar">
        <div className="navbar-links">
            <Link to ="/" className="nav-link">Home</Link>
            <Link to ="/AboutTheProject" className="nav-link">About</Link>
            <Link to ="/Progress" className="nav-link">Progress</Link>
        </div>
    </nav>
    );
}

export default NavBar;