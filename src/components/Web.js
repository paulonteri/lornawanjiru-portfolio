import React from "react";
import { Link } from "react-router-dom";

function Web() {
  return (
    <div>
      <article className="post featured">
        <header className="major">
          <span className="date">April 25, 2017</span>
          <h2>
            <Link to="#">
              And this is a<br />
              massive headline
            </Link>
          </h2>
          <p>
            Aenean ornare velit lacus varius enim ullamcorper proin aliquam
            <br />
            facilisis ante sed etiam magna interdum congue. Lorem ipsum dolor
            <br />
            amet nullam sed etiam veroeros.
          </p>
        </header>
        <Link to="#" className="image main">
          <img src="styles/images/pic01.jpg" alt="" />
        </Link>
        <ul className="actions special">
          <li>
            <Link to="#" className="button large">
              Full Story
            </Link>
          </li>
        </ul>
      </article>
    </div>
  );
}

export default Web;
