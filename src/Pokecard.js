"use strict";

/** Creates a display card from arguments {id, name, type, base_exp} */
function Pokecard({ id, name, type, base_exp }) {

    const BASE_URL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
    const cardStyle = {
        "background-color": "gray",
        margin: "1em",
        width: "200px",
    }

    // CR: put a class name
    return (
        <div className="Pokecard" style={cardStyle}>
            <b>{name}</b>
            <br></br>
            <img src={`${BASE_URL}${id}.png`}></img>
            <p>Type: {type}</p>
            <p>EXP: {base_exp}</p>
        </div>
    );
}

export default Pokecard;