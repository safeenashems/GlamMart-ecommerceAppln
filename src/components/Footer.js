import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; 
function Footer() {
  return (
    <footer className="footer" id="Footer">
      <div className="footer-container">
      
        {/* Customer Support */}
        <div className="footer-section">
          <h4>Customer Service</h4>
          <ul>
            <li>📞  +00248 2606060</li>
            <li>✉️ support@glammart.com</li>
            <li>💬  Available 24/7</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/new-arrivals">New Arrivals</a></li>
            <li><a href="/best-sellers">Best Sellers</a></li>
            <li><a href="/clearance-sale">Clearance Sale</a></li>
          </ul>
        </div>

        {/* Policies */}
        <div className="footer-section">
          <h4>Company Info</h4>
          <ul>
            <li><a href="/about-us">About Us</a></li>
            <li><a href="/careers">Careers</a></li>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
            <li><a href="/terms-and-conditions">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Newsletter and Social Links */}
        <div className="footer-section">
          <h4>Stay Connected</h4>
          <p style={{ marginBottom: "0px" }}>Join our mailing list for exclusive discounts and offers.</p>
          <input type="email" placeholder="Enter your email" className="newsletter-input"/>
          <button className="newsletter-button">Subscribe</button>
        </div>
        
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 MyGlamm. All rights reserved.</p>
        <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook size={25}  color="white" /></a>
            
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={25}     color="white" />
            {/* Twitter*/}</a> 
           
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={25}     color="white" />
            {/* Instagram*/}</a> 
            {/* <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a> */}
          </div>
      </div>
    </footer>
  );
};

export default Footer;
