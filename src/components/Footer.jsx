

function Footer() {
  return (
      <footer className="footer">
      <div className="footer-content">

        <div className="footer-section about">
          <h4>Our Store</h4>
          <p>Your trusted e-commerce platform. We provide quality products and 24/7 customer support.</p>
        </div>
        <div className="footer-section links">
          <h4>Quick Links</h4>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Privacy Policy</li>
            <li>Terms Of Use</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h4>Contact Info</h4>
          <p>📍 19 Cairo, Cairo, Egypt</p>
          <p>📞 +02011-9999-9999</p>
          <p>📧 store@gmail.com</p>
        </div>
        <div className="footer-section social">
          <h4>Follow Us</h4>
          <ul>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Twitter</li>
            <li>YouTube</li>
            <li>WhatsApp</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        © Copyright Store 2025. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer
