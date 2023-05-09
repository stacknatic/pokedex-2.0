import React from 'react';

const Search = (props) => {

    return(
        <form>
            <label htmlFor="search">Search pokemon</label>
            <input type="text" id="search" name="search" placeholder="enter character name" onChange={props.searchHandler}></input>
        </form>
    )
}

export default Search