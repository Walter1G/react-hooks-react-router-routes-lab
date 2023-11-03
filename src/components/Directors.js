import React from "react";
import { directors } from "../data";

function Directors() {

  function handleDisplayDirectors() {

    return directors.map((director) => (

      <div >
        <h2>Name: {director.name}</h2>
        <p>Movies:</p>
        <ul>
          {director.movies.map((movie, index) => <li key={index}> {movie}</li>)}
        </ul>


      </div>
    )

    )
  }

  return <div>
    <h1>Directors Page</h1>
    {handleDisplayDirectors()}
  </div>;
}

export default Directors;
