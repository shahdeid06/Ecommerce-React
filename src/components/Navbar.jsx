import { Link } from "react-router-dom";
import { FaUser, FaBars, FaSearch } from "react-icons/fa";
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <div className="topbar">
        <div className="topbar-logo">
          <img src="/logo.png" alt="Logo" className="logo-image" />
        </div>
         <div className="navbar">
        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/cart">Cart</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/login" className="login-link">Sing In <FaUser size={14} /></Link></li>
        </ul>
      </div>
        <div className="search-bar">
          <input type="text" placeholder="Search products..." />
          <button><FaSearch /></button>
        </div>
        <div className="carticon">
          <span><Link to="/cart"><FaShoppingCart size={24} color="#fedc96" /></Link></span>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <FaBars />
        </div>
      </div>
    </>
  );
};

export default Navbar;
