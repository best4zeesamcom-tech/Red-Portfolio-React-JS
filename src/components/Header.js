import React, { useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";

function Header() {
  const [active, setActive] = useState(false);

  return (
    <header>
      <button href="#" className="logo">Alex</button>

      <div id="menu-icon" onClick={() => setActive(!active)}>
        {active ? <FaXmark /> : <FaBars />}
      </div>

      <nav className={active ? "active" : ""}>
        <button href="#" className="active">Home</button>
        <button href="#">Services</button>
        <button href="#">Skills</button>
        <button href="#">Education</button>
        <button href="#">Experience</button>
        <button href="#">Contact</button>
      </nav>
    </header>
  );
}

export default Header;
