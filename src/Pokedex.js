"use strict";
import Pokecard from "./Pokecard";

/** Creates */
function Pokedex({ pokemon , isWinner = false}){
    //takes props (array of objects => {id: 4, name"charmander", type: fire, base_experience: 62} )
    return (<div className="Pokedex">

        {pokemon.map(p => (
            < Pokecard id = {p.id} 
            name = {p.name} 
            type = {p.type} 
            base_exp={p.base_experience}/>
        ))}

       <b>{isWinner ? "This Hand Wins!!!" : ""}</b>

    </div>);
}
// CR: explicity pass parameters from each component
export default Pokedex;