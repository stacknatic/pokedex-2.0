import React from 'react';

const Header = () => {
    return(
        <div>
            <h1>Pokedex</h1>
            <div className="generations-container">

            <button className="generations generation1">Gen 1</button>
            <button className="generations generation2">Gen 2</button>
            <button className="generations generation3">Gen 3</button>
            <button className="generations generation4">Gen 4</button>
            <button className="generations generation5">Gen 5</button>
            <button className="generations generation6">Gen 6</button>
            <button className="generations generation7">Gen 7</button>
            <button className="generations generation8">Gen 8</button>
            <button className="generations generation9">Gen 9</button>


            </div>
        </div>
    )
} 

export default Header