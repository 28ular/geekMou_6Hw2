
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import cls from '../components/Infocard.module.scss'

export const CharactersDetail = () => {
    const navigate  = useNavigate();

    const {id} = useParams();
    const [card , setCard] = useState(null);
    useEffect(() => {
        const Getinfo= async () => {
            try {
                const res = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
                setCard(res.data);
            }catch (error) {
                console.log(error);
            }
        };
        Getinfo()

    },[id])

    if (!card) {
        return <div>Loading...</div>;
    }
    return (
        <>

            <div className={cls.wrapper}>


            <div className={cls.cardInfo}>
                <div className={cls.card_item}>
                <span>{`card: ${card.id}`}</span>
                <img src={card.image} alt={card.name}/>
                    <h2 style={{color:'yellow'}}>{card.name}</h2>
                    <div className={cls.card_status}>
                        <span className={`badge ${card.status?.toLowerCase()}`}>{`${card.status}`}</span>
                        <span>{` ${card.species}`}</span>
                    </div>
                    <div className="card_23">
                        <span>{`location: ${card.location?.name }`}</span>
                        <span>{`локация : ${card.location?.name} || 'Неизвестно' `}</span>
                        <span>{` эпизодов: ${card.episode?.length ?? 0 }     `}</span>
                    </div>
                </div>
            </div>
                <button onClick={() => navigate(-1)} >back</button>
                </div>
        </>
    )
}