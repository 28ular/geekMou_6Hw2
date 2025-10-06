import {useEffect} from "react";
import {fetchRickMorty} from "../feuteurs/characters/charactersSlice.js";
import CharacterCard from "./CharacterCard.jsx";
import { useSelector, useDispatch } from "react-redux";


export const CharactersPage = () => {

    const dispatch = useDispatch();
    const { characters, status, error } = useSelector(state => state.characters);

    useEffect(() => {
        dispatch(fetchRickMorty())
    }, [dispatch]);

    return (
       <>
           <section className="card">
               {characters.map((character) => (
                   <CharacterCard key={character.id} c={character} />
               ))}
           </section>
       </>
    )
}