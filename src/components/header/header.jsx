import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="header d-flex">
      <h3>
        <div>Star DB</div>
      </h3>
      <ul className="d-flex">
        <li>
          <div>People</div>
        </li>
        <li>
          <div>Planets</div>
        </li>
        <li>
          <div>Starships</div>
        </li>
      </ul>
    </div>
  );
};

export default Header;
