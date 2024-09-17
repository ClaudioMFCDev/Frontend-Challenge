import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      {/* Payment Methods */}
      <div className="payment-methods">
        <img src="/visa-logo.png" alt="Visa" />
        <img src="/mastercard-logo.jpg" alt="MasterCard" />
        <img src="/amex-logo.png" alt="American Express" />
        <img src="/skrill-logo.png" alt="Skrill" />
        <span>and 50+ more</span>
      </div>

      <div>

      

      {/* Social Icons */}
      <div className="social-icons">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <img src="/facebook-icon.png" alt="Facebook" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <img src="/instagram-icon.png" alt="Instagram" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <img src="/twitter-icon.png" alt="Twitter" />
        </a>
        <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
          <img src="/discord-icon.png" alt="Discord" />
        </a>
      </div>

      {/* Footer Links */}
      <div className="footer-links">
        <div>
          <img src="/logo.svg" alt="chicksGold-logo" />
          <p>support@chicksgold.com</p>
        </div>
        <div>
          <h3>Chicks Gold</h3>
          <ul>
            <li><a href="/games">Games</a></li>
            <li><a href="/about-us">About Us</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/sitemap">Sitemap</a></li>
          </ul>
        </div>
        <div>
          <h3>Support</h3>
          <ul>
            <li><a href="/contact-us">Contact Us</a></li>
            <li><a href="/faq">FAQ</a></li>
          </ul>
        </div>
        <div>
          <h3>Legal</h3>
          <ul>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
            <li><a href="/terms-of-service">Terms of Service</a></li>
            <li><a href="/copyright-policy">Copyright Policy</a></li>
          </ul>
        </div>
        <div className="rate">
          <FontAwesomeIcon icon={faStar} className="icon-green"/>
          <FontAwesomeIcon icon={faStar} className="icon-green"/>
          <FontAwesomeIcon icon={faStar} className="icon-green"/>
          <FontAwesomeIcon icon={faStar} className="icon-green"/>
          <FontAwesomeIcon icon={faStar} className="icon-green"/>
          <span>Trustpilot Reviews</span>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>© 2017 - 2020 Chicksgold.com. All Rights Reserved</p>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
