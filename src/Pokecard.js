"use strict";
import "./Pokecard.css";

/** Creates a display card from arguments {id, name, type, base_exp} */
function Pokecard({ id, name, type, base_exp }) {

    const BASE_URL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

    // CR: put a class name
    return (
        <div className="Pokecard">
            <b>{name}</b>
            <br></br>
            <img src={`${BASE_URL}${id}.png`}></img>
            <p>Type: {type}</p>
            <p>EXP: {base_exp}</p>
        </div>
    );
}

export default Pokecard;