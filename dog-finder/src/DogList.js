import React from 'react';
import { Link } from 'react-router-dom';

function DogList({dogs}) {

    return (
      <div>
        {dogs.map((dog, i) => 
        <div key={i}>
            <h1><Link to={`/dogs/${dog.name.toLowerCase()}`} >{dog.name}</Link></h1>
            <img src={dog.src}  />
            <h2>{dog.age}</h2>
        </div>
        )}
      </div>
    );
  }

  export default DogList;