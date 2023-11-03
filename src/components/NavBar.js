import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  console.log("nav")
  return <div>

    <ul>
      <li><Link to="/"   >Home</Link></li>
      <li><Link to="/directors"    >Directors</Link></li>
      <li><Link to="/Movies"   >Movies</Link></li>
      <li><Link to="/Actors"   >Actors</Link></li>
    </ul>

  </div>;
}

export default NavBar;
