import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
      <footer className="footer">
      <div className="footer-content">

        <div className="footer-section about">
          <h3>Our Store</h3>
          <p>Your trusted e-commerce platform. We provide quality products and 24/7 customer support.</p>
        </div>
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li>About Us</li>
            <li>Privacy Policy</li>
            <li>Terms Of Use</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="footer-section contact">
          <h3>Contact Info</h3>
          <p>📍 19 Cairo, Cairo, Egypt</p>
          <p>📞 +02011-9999-9999</p>
          <p>📧 store@gmail.com</p>
        </div>
        <div className="footer-section social">
          <h3>Follow Us</h3>
          <ul>
            <li><FaFacebook/> Facebook</li>
            <li><FaInstagram /> Instagram</li>
            <li><FaTwitter/> Twitter</li>
            <li><FaYoutube/> YouTube</li>
            <li><FaWhatsapp/> WhatsApp</li>
          </ul>
        </div>
         <div className="footer-bottom">
        © Copyright Store 2025. All rights reserved.
      </div>
      </div>


    </footer>
  );
}

export default Footer
