import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";

import "../Navbar/Navbar.css"
import logo from "../../assets/logo.png"
// import "../App.css";
// import "../Navbar/Navbar.css"
// import logo from "../assets/logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  // Burger Menu by default, false when on desktop mode
  const [isScrolled, setIsScrolled] = useState(false);
  // Detects if there's a scroll (not on a mobile)
  // and is used to modify the Navbar when scrolling

  const toggleMenu = () => setMenuOpen(!menuOpen);
  // Toggles the mobile menu state between open (true) and closed (false)

  // Function to handle keyboard accessibility for the menu button
  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    // Checks if the user pressed the 'Enter' key or the 'Space' bar
    if (e.key === "Enter" || e.key === " ") {
      // Prevents the default browser behavior
      // (like scrolling down when pressing Space)
      e.preventDefault();
      // Triggers the menu toggle function and prevents page refresh
      toggleMenu();
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        // Checks if the user has scrolled more than 200 pixels down the page
        setIsScrolled(true);
        // Updates state to 'true' if the threshold is passed
      } else {
        setIsScrolled(false);
        // Resets to 'false' if the user scrolls back to the top
      }
    };
    // Registers the 'handleScroll' function to the browser's scroll event
    window.addEventListener("scroll", handleScroll);

    // Cleanup function: runs when the component unmounts (closes)
    return () => {
      // Removes the listener to prevent memory leaks and unnecessary background tasks
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
      // Empty dependency array ensures this effect runs only once (on mount)

  // Accessibility
  const navRef = useRef<HTMLElement | null>(null);
  // Creates a reference to the <nav> element to track the entire navigation bar
  const firstLinkRef = useRef<HTMLAnchorElement | null>(null);
  // Creates a reference to the first <a> link, useful for jumping focus to the start of the list
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  // Creates a reference to the <button> (hamburger menu) to return focus when the menu closes

  {/* Close with esc or outside click */}
  useEffect(() => {
    if (!menuOpen) return;
    // Optimization: If the menu is already closed, do nothing and exit the effect
    const handleKeyDownEscape = (e: KeyboardEvent) => {
      // Defines a function to listen for the "Escape" key
      if (e.key === "Escape") {
        setMenuOpen(false);
        // Closes the menu by updating the state
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      // Function to detect mouse clicks anywhere on the page
      const target = e.target as Node;
      // Converts the click target into a 'Node' type so we can use DOM methods

      // Close menu if no click
      if (
        navRef.current &&
        !navRef.current.contains(target) &&
        buttonRef.current &&
        !buttonRef.current.contains(target)
      ) {
        setMenuOpen(false);
      }
    };
      // If the user clicks outside of the Navbar, it will close

    
    window.addEventListener("keydown", handleKeyDownEscape);
    // Adds a global listener for keyboard presses to catch the "Escape" key
    document.addEventListener("mousedown", handleClickOutside);
    // Adds a global listener for mouse clicks to detect "outside" clicks

    // Cleanup function: runs when the component unmounts or menuOpen changes
    return () => {
      window.removeEventListener("keydown", handleKeyDownEscape);
      // Stop listening for the Escape key on the window
      document.removeEventListener("mousedown", handleClickOutside);
      // Stop listening for clicks on the document
    };
  }, [menuOpen]);
    {/* Effect re-syncs only when the menu's open/closed state changes */}

  useEffect(() => {
    if (menuOpen && firstLinkRef.current) {
      // If the menu has just opened and the first link exists...
      firstLinkRef.current.focus();
      // Move the keyboard focus to the first link automatically
    }

    if (!menuOpen && buttonRef.current) {
      // If the menu has just closed and the toggle button exists...
      buttonRef.current.focus();
      // Return the keyboard focus to the button that opened the menu
    }
  }, [menuOpen]);
      {/* This runs every time the menu is opened or closed */}
  

  return (
  <header className={`Navbar-header ${isScrolled ? "scrolled" : ""}`}>
    {/* The main container for the navigation bar */}
    {/* Uses a Template Literal to dynamically add the "scrolled" class based on our state */}
    <div className="Navbar-header-container">
      {/* Wrapper to center and constrain the width of the navbar content */}
      
      {/* 1. Left part : Logo */}
      <div className="Navbar-header-link-logo-container">
        <NavLink 
          to="/" className={`Navbar-header-link-logo ${menuOpen ? "fade-out" : ""}`}
        >
            <img src={logo} alt="Iloé Photography logo" className="Navbar-header-logo" />
        </NavLink>
      </div>

      {/* 2. Center part : Navigation */}
      <nav
        ref={navRef}
        aria-label="Navigation principale"
      >
        <ul className={`Navbar-links ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(false)}
          /* Empêche les lecteurs d'écran de lire le menu s'il est fermé */
          aria-hidden={!menuOpen}
        >
          <li><NavLink to="/" ref={firstLinkRef}>Accueil</NavLink></li>
          <li><NavLink to="/urbex">Urbex</NavLink></li>
          <li><NavLink to="/portrait">Portrait</NavLink></li>
          <li><NavLink to="/sport">Sport</NavLink></li>
          <li><NavLink to="/voyage">Voyage</NavLink></li>
          <li><NavLink to="/series">Séries</NavLink></li>
          <li><NavLink to="/boutique">Boutique</NavLink></li>
          <li><NavLink to="/about">À Propos</NavLink></li>
        </ul>
      </nav>

      {/* 3. Right part : Burger menu on mobile, toggle language and connexion */}
      <div className="Navbar-header-right">
        <button
          ref={buttonRef}
          type="button"
          className={`Navbar-hamburger ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
          onKeyDown={handleKeyDown}
          aria-expanded={menuOpen}
          aria-label="Menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </div>
  </header>
);
}

export default Navbar;
