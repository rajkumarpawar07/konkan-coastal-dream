const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="#journey" className="nav-links">
              Journey
            </a>
          </li>
          <li className="nav-item">
            <a href="#itinerary" className="nav-links">
              Itinerary
            </a>
          </li>
          <li className="nav-item">
            <a href="#food" className="nav-links">
              Food
            </a>
          </li>
          <li className="nav-item">
            <a href="#plan" className="nav-links">
              Plan
            </a>
          </li>
          <li className="nav-item">
            <a href="#gallery" className="nav-links">
              Gallery
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;