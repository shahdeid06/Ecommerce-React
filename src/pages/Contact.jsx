
function Contact() {
  return (
    <div className="contact-page" style={{marginTop:'100px'}}>
      <h2 className="title">Contact Us</h2>

      <div className="contact-sections">
        <div className="contact-info">
          <h3>Call To Us</h3>
          <p>We are available 24/7, 7 days a week.</p>
          <p><strong>Phone:</strong> +201199999999</p>

          <h3>Write To Us</h3>
          <p>Fill out our form and we will contact you within 24 hours.</p>
          <p><strong>Email 1:</strong> customer@store.com</p>
          <p><strong>Email 2:</strong> support@store.com</p>
        </div>
        <form className="contact-form" onSubmit={(e) => {e.preventDefault();alert("✅ Your message has been sent successfully!");}}>
          <input type="text" name="name" placeholder="Your Name *" required />
          <input type="email" name="email" placeholder="Your Email *" required />
          <input type="tel" name="phone" placeholder="Your Phone *" required />
          <textarea name="message" rows="5" placeholder="Your Message *" required></textarea>
          <button type="submit">Send</button>
        </form>
      </div> 
      </div> 
  );
}

export default Contact;
