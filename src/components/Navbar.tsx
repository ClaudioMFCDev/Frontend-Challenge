import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faChevronDown,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Button from "./Button/TextIcon";
import { useState } from "react";

type Links = {
  name: string;
  href: string;
};

const linksL: Links[] = [
  { name: "CURRENCY", href: "#" },
  { name: "ITEMS", href: "#" },
  { name: "ACCOUNTS", href: "#" },
  { name: "SERVICES", href: "#" },
  { name: "SWAP", href: "#" },
  { name: "SELL", href: "#" },
];

const linksR: Links[] = [
  { name: "USD", href: "#" },
  { name: "CART (5)", href: "#" },
];

const MyNavbar = () => {
  // State to handle menu open/close
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      {/* 1/2 - Left section with logo and links */}
      <div className="nav-content">
        {/* Burger menu for mobile */}
        <div className="menu-toggle" id="mobile-menu" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Logo */}
        <div className="logo">
          <img src="logo.svg" alt="chicksgold-logo" />
        </div>

        {/* Left navigation links */}
        <ul className={`nav-linksL ${isMenuOpen ? "active" : ""}`}>
          {linksL.map((link, index) => (
            <li key={index}>
              <a href={link.href}>{link.name}</a>
              <FontAwesomeIcon
                icon={faChevronDown}
                style={{ color: "#FFFFFF" }}
                size="sm"
              />
            </li>
          ))}
        </ul>
      </div>

      {/* 1/2 - Right section with auth buttons and links */}
      <div className="nav-content">
        <ul className={`nav-linksR ${isMenuOpen ? "active" : ""}`}>
          {linksR.map((link, index) => (
            <li key={index}>
              <a href={link.href}>
                {link.name === "CART (5)" && (
                  <FontAwesomeIcon
                    icon={faCartShopping}
                    style={{ color: "#DDDDDD" }}
                  />
                )}
                {link.name}
              </a>
              {link.name !== "CART (5)" && (
                <FontAwesomeIcon
                  icon={faChevronDown}
                  style={{ color: "#FFFFFF" }}
                  size="sm"
                />
              )}
            </li>
          ))}
        </ul>

        {/* Auth buttons */}
        <div className="auth-buttons">
          <Button label="SIGN IN" className="sign-in-btn" icon={faUser} />
        </div>
      </div>
    </nav>
  );
};

export default MyNavbar;
