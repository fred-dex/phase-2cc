import React, { useState } from "react";



function Planeteer({ planeteers, onSelectFromUSA }) {
  const { id, name, fromUSA, quote, pictureURL, twitter } = planeteers

const [showNewPlaneteer, setShowNewPlaneteer] = useState(id)

function handleClick() {
  onSelectFromUSA((fromUSA) => !fromUSA)
}

// function handlefromUSA() {
//   setIsFromUSA((isFromUSA) => !isFromUSA)
// }

// function handleDeletePlaneteer() {
//   fetch(`http://localhost:8080/planeteers/${id}`, {
//     method: 'DELETE',
//   })
//   onDeletePlaneteer(id)
// }

// function handleNewPlaneteer(e) {
//   e.preventDefault()
//   fetch(`http://localhost:8080/planeteers/${id}`, {
//     method:'PATCH',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({ id: showNewPlaneteer }),
// })
//     .then((r) => r.json())
//     .then((showNewPlaneteer) => {
//       showNewPlaneteer(showNewPlaneteer)
//     })
// }

  return (
    <li className="cards__item">
      <div className="card">
        <img
          src={pictureURL}
          alt={name}
          className="card__image"
        />
        <div className="card__content">
          <div className="card__title">{name}</div>
          <p className="card__text">{quote}</p>
          <div className="card__detail">
            <p>{twitter}</p>
            <p> {fromUSA ? 'FromUSA' : 'From Somewhere Else'} 
            < button onClick={handleClick}>FromUSA</button>
            {/* < button onClick={handleDeletePlaneteer}>Delete</button> */}
            < button onClick={handleClick}>Not From USA</button>
          <input  
          value={showNewPlaneteer}
          onChange={(e) => setShowNewPlaneteer((e.target.value))}
          />
            </p>
          </div>
        </div>
      </div>
    </li>
  );
}

export default Planeteer;
