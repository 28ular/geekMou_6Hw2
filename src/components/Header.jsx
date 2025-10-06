import { Link, NavLink } from "react-router-dom";

export default function Header() {
    return (
        <header className="header">
            <Link to={'/'} className="brand">
                <span className="brand-mark" />
                <span>Rick & Morty Explorer</span>
            </Link>
            <nav className="nav">
                <NavLink to='/' end className={({isActive}) => isActive ? 'link active' : 'link'}>Персонажи</NavLink>
            </nav>
            <nav className="nav">
                <NavLink to='/filter' end className={({isActive}) => isActive ? 'link active' : 'link'}>фильтр</NavLink>
            </nav>
        </header>
    )
}