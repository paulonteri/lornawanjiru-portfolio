import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Nav from "./Nav";
import Burger from "./Burger";
function Header() {
  return (
    <BrowserRouter>
      <div>
        {/* intro */}
        <div id="intro">
          <h1>
            This is
            <br />
            Lorna Wanjiru
          </h1>
          <p>Ticket to knowing me cause there is no other way.</p>
          <ul className="actions">
            <li>
              <Link
                to="#header"
                className="button icon solid solo fa-arrow-down scrolly"
              >
                Continue
              </Link>
            </li>
          </ul>
        </div>

        {/* Boxes */}
        <header id="header">
          <Link to="/home" className="logo">
            MEE
          </Link>
        </header>

        {/* nav */}
        <Nav />
        <Burger />
      </div>
    </BrowserRouter>
  );
}
export default Header;
