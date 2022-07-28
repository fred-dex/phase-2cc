import React, { useState, useEffect } from "react";
import Planeteer from "./Planeteer";

function PlaneteersContainer() {
  const [planeteers, setPlaneteers] = useState([])

  useEffect(() => {
    fetch('http://localhost:8003/planeteers')
    .then((r) => r.json())
    .then(planeteers => setPlaneteers(planeteers))
  }, [])

  // function addPlaneteer(planeteer) {

  // }

  return (  
    <ul className="cards">
      <Planeteer 
      planeteers={planeteers} />
    </ul>
  );
}

export default PlaneteersContainer;
