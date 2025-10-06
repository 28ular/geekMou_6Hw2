import { Link } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchRickMorty} from "../feuteurs/characters/charactersSlice.js";

export default function CharacterCard({ c }) {

    const {characters  , error  , status } = useSelector(state => state.characters);
    const dispatch = useDispatch();

    useEffect(() => {
        if (status === 'idle')   dispatch(fetchRickMorty())

    },[])
    console.log(characters)
    console.log(status)

    console.log(fetchRickMorty)
    if (!c) return null;



    return (
        <div className="wrapper">


            <article className="card">
                <div className="card_container">

                    <div className="card-thumb">
                        <img
                            src={c.image}
                            alt={c.name || 'unknown'}
                            loading="lazy"
                        />
                    </div>

                    <div className="card-body">
                        <h3 className="card-title">{c.name}</h3>

                        <div className="badge-row">
                            <span className={`badge ${c.status?.toLowerCase()}`}>{c.status}</span>
                            <span className="badge ghost">{c.species}</span>
                            {c.type && <span className="badge ghost">{c.type}</span>}
                        </div>

                        <dl className="meta">
                            <div>
                                <dt>Локация</dt>
                                <dd>{c.location?.name || 'Неизвестно'}</dd>
                            </div>
                            <div>
                                <dt>Происхождение</dt>
                                <dd>{c.origin?.name || 'Неизвестно'}</dd>
                            </div>
                            <div>
                                <dt>Эпизодов</dt>
                                <dd>{c.episode?.length ?? 0}</dd>
                            </div>
                        </dl>

                        <Link className="btn" to={`/character/${c.id}`}>
                            Подробнее
                        </Link>
                    </div>
                </div>
            </article>
        </div>
    );
}
