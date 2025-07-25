import { Link } from "react-router-dom";
import { FaUser, FaBars } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar-container">
      <nav className="navbar">
        <div className="logo">
          <img src="/download.png" alt="logo" />
        </div>
        {/* <div className="hamburger" onClick={toggleMenu}>
          <FaBars />
        </div> */}
        <div className="nav-wrapper">
          <ul className={`nav-links ${isOpen ? "open" : ""}`}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/cart">Cart</Link></li>
            <div className="login">
            <Link to="/login">
              Login <FaUser className="user-icon" />
            </Link>
          </div>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
           <div className="hamburger" onClick={toggleMenu}>
          <FaBars />
        </div> 

          {/* <div className="login">
            <Link to="/login">
              Login <FaUser className="user-icon" />
            </Link>
          </div> */}
          
        </div>
      </nav>
    </div>
  );
};

export default Navbar;