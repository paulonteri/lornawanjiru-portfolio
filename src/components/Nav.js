import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

const Nav = () => {
  return (
    <BrowserRouter>
      <nav id="nav">
        <ul className="links">
          <li>
            <Link to="/home">Me</Link>
          </li>
          <li>
            <Link to="/web">Web Development</Link>
          </li>
          <li>
            <Link to="/dog">Dog Breeder</Link>
          </li>
          <li>
            <Link to="/cyber">Cybersecurity</Link>
          </li>
        </ul>
        <ul className="icons">
          <li>
            <Link to="#" className="icon brands fa-twitter">
              <span className="label">Twitter</span>
            </Link>
          </li>
          <li>
            <Link to="#" className="icon brands fa-facebook-f">
              <span className="label">Facebook</span>
            </Link>
          </li>
          <li>
            <Link to="#" className="icon brands fa-instagram">
              <span className="label">Instagram</span>
            </Link>
          </li>
          <li>
            <Link to="#" className="icon brands fa-github">
              <span className="label">GitHub</span>
            </Link>
          </li>
        </ul>
      </nav>
    </BrowserRouter>
  );
};
export default Nav;
