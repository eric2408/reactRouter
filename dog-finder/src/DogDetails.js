import React from 'react';

function DogDetails({dog}) {

    return (
      <div>
        <h1>{dog.name}</h1>
        <img src={dog.src} />
        <h2>{dog.age}</h2>
        {dog.facts.map((fact, i) =>
            <p key={i}>{fact}</p>
        )}
      </div>
    );
  }

  export default DogDetails;