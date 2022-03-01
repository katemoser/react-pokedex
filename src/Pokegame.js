
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

    let hand1Exp = 0;
    let hand2Exp = null;
    let isWinner1;
    let isWinner2;


    for (let pkmn of hand1){
        hand1Exp += pkmn.base_experience;
    }

    for (let pkmn of hand2){
        hand2Exp += pkmn.base_experience;
    }

    hand1Exp > hand2Exp ? isWinner1 = true : isWinner2 = true;



    return (
        <div className="Pokegame">
            <div className="Hand" style={handStyle}>
                Hand 1
                Total EXP: {hand1Exp}
                <Pokedex pokemon={hand1} isWinner={isWinner1} />
            </div>
            <div className="Hand" style={handStyle}>
                Hand 2
                Total EXP: {hand2Exp}
                <Pokedex pokemon={hand2} isWinner={isWinner2}/>
            </div>
        </div>
    )


}

export default Pokegame;
