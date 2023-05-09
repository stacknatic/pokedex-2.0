import React from 'react';

const Search = () => {
    return(
        <form>
            <label htmlFor="search">Search pokemon</label>
            <input type="text" id="search" name="search" placeholder="enter character name"></input>
            <button className="pokedex-search-button" type="submit">search</button>
        </form>
    )
}

export default Search