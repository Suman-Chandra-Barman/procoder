import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  return (
    <div>
      <nav>
        <div className="navbar bg-green-300">
          <a href="#logo" className="btn btn-ghost normal-case text-xl">
            <FontAwesomeIcon icon={faCode}></FontAwesomeIcon>
            <span className="ml-4">ProCoder</span>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
