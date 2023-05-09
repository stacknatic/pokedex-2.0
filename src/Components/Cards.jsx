import React from 'react';
import {useState, useEffect} from 'react'
import axios from 'axios';

const Cards = () => {
    const [pokemons, setPokemons] = useState([])
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        setLoaded(false);
        axios
            .get('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')
            .then((response) => {
                const fetches = response.data.results.map(pokemon => {
                    return(

                        axios
                            .get(pokemon.url)
                            .then(response => response.data)
                    
                    )
                });
                Promise.all(fetches).then(response => {
                    setPokemons(response);
                    setLoaded(true)
                })
            })
    }, [])
  
//    useEffect(() => {
//     // if(!loaded){
//         setTimeout(() => {

//             axios
//             .get('https://pokeapi.co/api/v2/pokemon-species/?offset=0&limit=151')
//             .then(res => setPokemons(res.data.results))
//             .then(setLoaded(true))
//         }, 1000)
        

//     // }
//    },[])

   const Card = ({character, id, type, type2, image}) => {
    return(
        <div className='cards-container'>

            <div className='pokemonCard'>

        {/* <p className="result-character">{character}</p> */}
        {/* <p className="result-character-id">{id}</p> */}
        {/* <div className="result-type-container">

<span className="result-type">{type}</span>
</div> */}
        <p>{character}</p>
        <span className='pokemonGeneration'>{id}</span>
        <span>{type}</span>
        <span>{type2}</span>
        <img src={image} alt={id}></img>

            </div>
</div>

    )
   }

   const Characters = () => {
       const thecharacters = pokemons.map(pokemon => {
     
        const type = () => {

            
            try {
                if (pokemon.types[1].type.name) {
                  return pokemon.types[0].type.name + " " + pokemon.types[1].type.name;
                }
              } catch (e) {
                return pokemon.types[0].type.name
                ;
              }
        }
           return (

               <Card 
                key = {pokemon.name}
                character = {pokemon.name}
                id = {pokemon.id}
                type = {type()}
                image = {pokemon.sprites.front_default}

               />
           )
       })
       return thecharacters
   }
   if(!loaded){
    return(

            <div>
                <progress></progress>
            </div>
    )
   }


       return(
            <Characters />
       )
   
}

export default Cards