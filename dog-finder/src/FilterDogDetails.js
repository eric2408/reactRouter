import React from 'react';
import { useParams } from 'react-router-dom';
import DogDetails from './DogDetails';

const FilterDogDetails = ({dogs}) => {
    const {name} = useParams();

    if(name){
        const theDog = dogs.find(dog => dog.name.toLowerCase() === name.toLowerCase());
        return <DogDetails dog={theDog}/>
    }

    return null;
}

export default FilterDogDetails;