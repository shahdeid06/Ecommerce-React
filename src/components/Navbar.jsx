
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";



const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/download.png" alt="logo" />
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/cart">Cart</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>
      <div className="login">
        <Link to="/login">
          Login <FaUser className="user-icon" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;