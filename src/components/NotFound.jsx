import {useNavigate} from "react-router-dom";

export const NotFound = () => {

    const navigate = useNavigate()

    return (
    <>

        <h1 style={{color: 'red'}}>NotFound</h1>
        <button onClick={() => navigate('/')}>вернутся назад</button>

    </>

    )
}