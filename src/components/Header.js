import React, { useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";

function Header() {
  const [active, setActive] = useState(false);

  return (
    <header>
      <a href="#" className="logo">Alex</a>

      <div id="menu-icon" onClick={() => setActive(!active)}>
        {active ? <FaXmark /> : <FaBars />}
      </div>

      <nav className={active ? "active" : ""}>
        <a href="#" className="active">Home</a>
        <a href="#">Services</a>
        <a href="#">Skills</a>
        <a href="#">Education</a>
        <a href="#">Experience</a>
        <a href="#">Contact</a>
      </nav>
    </header>
  );
}

export default Header;