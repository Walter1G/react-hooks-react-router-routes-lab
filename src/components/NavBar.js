import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  console.log("nav")
  return <div>

    <ul>
      <li><Link to="/" exact  >Home</Link></li>
      <li><Link to="/directors" exact   >Directors</Link></li>
      <li><Link to="/Movies" exact  >Movies</Link></li>
      <li><Link to="/Actors" exact  >Actors</Link></li>
    </ul>

  </div>;
}

export default NavBar;
