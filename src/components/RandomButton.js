import React from "react";
import { getRandomPlaneteer } from "../data/planeteers";
import { useState } from 'react'

function RandomButton() {
  const [ randomPlaneteer, setRandomPlaneteer] = useState('http://localhost:8080/planeteers/')

  function handleRandomPlaneteer() {
    fetch('http://localhost:8080/planeteers/')
      .then((r) => r.json())
      .then(({ randomPlaneteer }) => {
      setRandomPlaneteer(randomPlaneteer)
      })
  }

  function handleClick() {
    const randomPlaneteer = getRandomPlaneteer();
    console.log("For the advanced deliverables", randomPlaneteer);
  }

  return (
    <div className="centered">
      <button id="random-planeteer" onClick={handleClick}>New Please</button>
        <img src={randomPlaneteer} alt='RandomPlaneteer'/>
        
    </div>   
  );
}

export default RandomButton;
