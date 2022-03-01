
import Pokedex from "./Pokedex";

function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

function Pokegame({ pokemon }) {
    //randomly create two groups of 4 pokemon each
    //pass those to pokedex
    //add up experiencec from each hand
    //and display 

    const cards = shuffle(pokemon);
    const hand1 = cards.slice(0, 4);
    const hand2 = cards.slice(4);

    const handStyle = {
        display: 'inline-block',
    }


    return (
        <div className="Pokegame">
            <div className="Hand" style={handStyle}>
                Hand 1
                <Pokedex pokemon={hand1} />
            </div>
            <div className="Hand" style={handStyle}>
                Hand 2
                <Pokedex pokemon={hand2} />
            </div>
        </div>
    )


}

export default Pokegame;
