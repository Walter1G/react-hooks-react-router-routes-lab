import React from "react";
import { actors } from "../data";
// import { act } from "react-dom/test-utils";

function Actors() {
  function handleDisplayActors() {

    return actors.map(actor => (
      <div>
        <h2>Name: {actor.name}</h2>
        <p>Movies: </p>
        <ul>
          {actor.movies.map((movie, index) => <li key={index}>{movie}</li>)}
        </ul>
      </div>
    ))


  }

  return <div>
    <h1>Actors Page</h1>
    {handleDisplayActors()}
  </div>;
}

export default Actors;
