import React from 'react';
import {useState, useEffect} from 'react'
import axios from 'axios';

const Cards = () => {
    const [pokemons, setPokemons] = useState([])
    const [loaded, setLoaded] = useState(false)
  
   useEffect(() => {
    // if(!loaded){
        setTimeout(() => {

            axios
            .get('https://pokeapi.co/api/v2/pokemon-species/?offset=0&limit=151')
            .then(res => setPokemons(res.data.results))
            .then(setLoaded(true))
        }, 1000)
        

    // }
   },[])

   const Card = ({character, id, type}) => {
    return(
            <div className='result-card'>

        {/* <p className="result-character">{character}</p> */}
        {/* <p className="result-character-id">{id}</p> */}
        {/* <div className="result-type-container">

<span className="result-type">{type}</span>
</div> */}
        <p>{character}</p>
        <p>{id}</p>
        <p>{type}</p>

            </div>

    )
   }

   const Characters = () => {
       const thecharacters = pokemons.map(pokemon => {
           return (

               <Card 
                key = {pokemon.name}
                character = {pokemon.name}
                id = {pokemon.id}
                type = {pokemon.type}

               />
           )
       })
       return thecharacters
   }
   if(!loaded){
    return(

        <div>...loading the pokemon characters</div>
    )
   }


       return(
            <Characters />
       )
   
}

export default Cards