import { useState } from "react";

const Header = () => {

  const [isDropDownOpen,setIsDropDownOpen] = useState(false)

  const toggleDropdown = () => setIsDropDownOpen(!isDropDownOpen)

  return (
    <header>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">Navbar</span>
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              onClick={toggleDropdown}
            >
              Dropdown button
            </button>
            <div className={`dropdown-menu ${isDropDownOpen ? "show" : ""}`} aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item" href="#">
                Action
              </a>
              <a className="dropdown-item" href="#">
                Another action
              </a>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
