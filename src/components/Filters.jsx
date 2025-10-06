import { useDispatch, useSelector } from "react-redux";
import { selectFilters } from '../feuteurs/characters/selector.js'
import {fetchRickMorty, setName, setSpecies, setStatus} from "../feuteurs/characters/charactersSlice.js";
import {useEffect} from "react";

export default function Filters() {
    const dispatch = useDispatch()


    const { name, status, species  } = useSelector(state => state.characters.filters)

    
    useEffect(() => {
        dispatch(fetchRickMorty())
    },[])

    return (
        <section className="filters">
            <input
                className="input"
                placeholder="Поиск по имени..."
                value={name}
                onChange={(e) => dispatch(setName(e.target.value))}
            />
            <select className="select" value={status} onChange={(e) => dispatch(setStatus(e.target.value))}>
                <option value="all">Статус: любой</option>
                <option value="alive">Живые</option>
                <option value="dead">Мертвые</option>
                <option value="unknown">Неизвестные</option>
            </select>
            <input
                className="input"
                placeholder="Species (человек, инопланетянин...)"
                value={species}
                onChange={(e) => dispatch(setSpecies(e.target.value))}
            />
        </section>
    )
}