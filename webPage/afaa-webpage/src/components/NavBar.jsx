import {Link} from "react-router-dom";
import "../css/NavBar.css";

function NavBar(){
    return (
    <nav className="navbar">
        <div className="navbar-links">
            <Link to ="/" className="nav-link">Home</Link>
            <Link to ="/About-Us" className="nav-link">About Us</Link>
            <Link to ="/About-the-Game" className="nav-link">About the Game</Link>
            <Link to ="/Progress" className="nav-link">Progress</Link>
        </div>
    </nav>
    );
}

export default NavBar;