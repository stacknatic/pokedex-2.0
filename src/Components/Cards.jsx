import React from 'react';
import {useState, useEffect} from 'react'
import axios from 'axios';
import Search from './Search';

const Cards = () => {
    const [pokemons, setPokemons] = useState([])
    const [loaded, setLoaded] = useState(false)
    const [searchInput, setSearchInput] = useState('');



    useEffect(() => {
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


   const Card = ({character, id, type, type2, image}) => {
    return(
        <>
        <div className='cards-container'>

            <div className='pokemonCard'>

       
        <p>{character}</p>
        <span className='pokemonGeneration'>{id}</span>
        <span>{type}</span>
        <span>{type2}</span>
        <img src={image} alt={id}></img>

            </div>
        </div>
        </>

    )
   }

   const searchInputHandler = (e) => {
    setSearchInput(e.target.value)
  }

  const searchFilter = pokemons.filter(item => {
    return item.name.includes(searchInput)
  })

   
   const Characters = () => {
       const thecharacters = searchFilter.map(pokemon => {
           
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
        <>
            <Search searchHandler = {searchInputHandler} />
            <div className='cards-container'>
            <Characters />
            </div>

          
        </>
       )
   
}

export default Cards