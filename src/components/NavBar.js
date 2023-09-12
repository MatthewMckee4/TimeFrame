import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <ul class="left-links">
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
      <ul class="right-links">
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup">Sign Up</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
