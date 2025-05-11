import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaInstagram } from 'react-icons/fa';

function Contact() {
  return (
    <div className="contact-page">
      
      {/* Hero Banner */}
      <div className="contact-hero">
        <h1>Get in Touch</h1>
        <p>Your unforgettable stay starts here. Contact Paradise Hotel today!</p>
      </div>

      <div className="contact-container">

        {/* Contact Form Left */}
        <div className="contact-form-section">
          <h2>Send Us a Message</h2>
          <form className="contact-form">
            <div className="form-group">
              <input type="text" placeholder="Full Name" required />
              <input type="email" placeholder="Email Address" required />
            </div>
            <input type="text" placeholder="Subject" required />
            <textarea placeholder="Your Message..." required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>

        {/* Contact Info Right */}
        <div className="contact-details-section">
          <div className="info-block">
            <FaPhoneAlt size={24} />
            <div>
              <h3>Call Us</h3>
              <p>+1 234 567 8901</p>
            </div>
          </div>

          <div className="info-block">
            <FaEnvelope size={24} />
            <div>
              <h3>Email</h3>
              <p>reservations@paradisehotel.com</p>
            </div>
          </div>

          <div className="info-block">
            <FaMapMarkerAlt size={24} />
            <div>
              <h3>Visit Us</h3>
              <p>123 Paradise Avenue, Dream City, USA</p>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="social-media">
            <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebookF /></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
          </div>
        </div>

      </div>

      {/* Embedded Google Map */}
      <div className="map-container">
        <iframe
          title="Hotel Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8350170984166!2d-122.41990648436407!3d37.77492977975901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808aa6f3bf27%3A0x30ed2a7e9c9f0c91!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1630620894025!5m2!1sen!2sus"
          width="100%"
          height="450"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

    </div>
  );
}

export default Contact;
