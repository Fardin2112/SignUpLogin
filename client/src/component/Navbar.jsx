import "../assets/CSS/Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="div-nav">
      <div className="navbar-left">
        <h1>Travelers</h1>
      </div>
      <div className="navbar-right">
        <ul className="navbar-right-ul">
          <Link
            className="nav-sign"
            to="/register"
            style={{ textDecoration: "none", fontSize: "1.7em" }}
          >
            SignUp
          </Link>
          <Link 
          className="nav-login"
          to="/login"
          style={{ textDecoration: "none", fontSize: "1.7em" }}>
            Login
          </Link>
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;
