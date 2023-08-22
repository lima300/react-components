import { useState } from "react";
import "./styles.css";

import book from "./assets/book.svg";
import briefcase from "./assets/briefcase.svg";
import home from "./assets/home.svg";
import info from "./assets/info.svg";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseOver = () => {
    setIsOpen(true);
  };

  const handleMouseOut = () => {
    setIsOpen(false);
  };

  return (
    <div className="sidebar-container">
      <div
        className={`sidebar ${isOpen ? "open" : ""}`}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <div className="sidebar-item">
          <img className="sidebar-icon" src={home} alt="home" />
          <span>Home</span>
        </div>
        {isOpen && <hr />}
        <div className="sidebar-item">
          <img className="sidebar-icon" src={info} alt="home" />
          <span>Info</span>
        </div>
        {isOpen && <hr />}
        <div className="sidebar-item">
          <div>
            <img className="sidebar-icon" src={briefcase} alt="home" />
          </div>
          <span>Services</span>
        </div>
        {isOpen && <hr />}
        <div className="sidebar-item">
          <img className="sidebar-icon" src={book} alt="home" />
          <span>Contact</span>
        </div>
        {isOpen && <hr />}
      </div>
    </div>
  );
}

export default Sidebar;
